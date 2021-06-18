import React, { Component } from 'react'
import store from 'redux/store';
import { LoginActionTypes } from 'types';
import { AppStorage, LoginRequests, RequestHandlers, UserRequests } from 'utils';
import type { Chat, Message } from '../../../../../express/multidesk-server/src/entities';
import Sockets from '../Sockets';
import { Sidebar, ChatWindow } from './components'
import './Main.module.css';

interface IState {
    chats: Chat[];
    currentChatId: number | undefined;
    requestAmount: number;
    messages: Message[];
}

export default class MainWindow extends Component<unknown, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            chats: [],
            currentChatId: undefined,
            requestAmount: 0,
            messages: [],
        }
    }

    componentDidMount = async (): Promise<void> => {
        const token = AppStorage.token ?? 'none';
        const response = await LoginRequests.checkToken({ token });
        if (response.status !== 200) {
            alert('Сессія закінчилась.');
            store.dispatch({ type: LoginActionTypes.LOGOUT, payload: undefined });
            return;
        }

        Sockets.start(token);

        Sockets.onNewMessage(this._onSocketNewMessage);
        Sockets.onAvailableChat(this._onSocketAvailableChat);
        Sockets.onChatEnded(this._onSocketChatEnded);

        this._updateState(this.state.currentChatId);
    }

    componentWillUnmount = (): void => {
        Sockets.stop();
    }

    render = (): JSX.Element => {
        return (
            <main>
                <Sidebar tickets={this.state.chats} currentChatId={this.state.currentChatId} onTicketChange={(id) => { this._onTicketChange(id) }} requestAmount={this.state.requestAmount} onStartChat={ () => { this._onStartChat() } } />
                <ChatWindow currentChatId={this.state.currentChatId} messages={this.state.messages} onNewMessage={(message) => { this._onNewMessage(message) }} onEndChat={() => { this._onEndChat() }} />
            </main>
        )
    }

    private _updateState = async (chatId?: number) => {
        const newState: Partial<IState> = {};

        const chats = RequestHandlers.onUnauthorizedResponse(await UserRequests.getAllUserChats());
        if (chats) newState.chats = chats.data.chats;

        if (chatId !== undefined) {
            const messages = RequestHandlers.onUnauthorizedResponse(await UserRequests.getMessages({ chatId }));
            if (messages) {
                newState.messages = messages.data.messages;
                newState.currentChatId = chatId;
            }
        } else {
            newState.messages = [];
        }

        const numberOfChats = RequestHandlers.onUnauthorizedResponse(await UserRequests.getNumberOfAvailableChats());
        if (numberOfChats) newState.requestAmount = numberOfChats.data.amount;

        this.setState(newState as IState);
    }

    private _onTicketChange = async (id: number) => {
        // const response = RequestHandlers.onUnauthorizedResponse(await UserRequests.getMessages({ chatId: id }));
        // if (response) {
        //     this.setState({ currentChatId: id, messages: response.data.messages });
        // }
        await this._updateState(id);
    }

    private _onNewMessage = async (message: string) => {
        const token = AppStorage.token ?? 'none';
        const response = RequestHandlers.onUnauthorizedResponse(await LoginRequests.checkToken({ token }));
        if (response?.status === 200 && this.state.currentChatId !== undefined) {
            Sockets.newMessage({ token, chatId: this.state.currentChatId, messageContent: message });
            if (this.state.messages.length === 0) {
                this.setState({ messages: [
                    {
                        chatId: this.state.currentChatId,
                        content: message,
                        dateInISO: new Date().toISOString(),
                        fromUser: true,
                        id: 0,
                        chat: {} as any,
                    },
                ]});
            } else {
                this.setState({ messages: [
                    ...this.state.messages, 
                    {
                        chatId: this.state.currentChatId,
                        content: message,
                        dateInISO: new Date().toISOString(),
                        fromUser: true,
                        id: this.state.messages[this.state.messages.length - 1].id + 1,
                        chat: {} as any,
                    },
                ]});
            }
        }
    }

    private _onSocketNewMessage = (message: Message) => {
        if (this.state.currentChatId === message.chatId) {
            this.setState({ messages: [...this.state.messages, message] });
        }
    }

    private _onSocketAvailableChat = (numberOfAvailableChats: number) => {
        this.setState({ requestAmount: numberOfAvailableChats });
    }

    private _onSocketChatEnded = async (chat: Chat) => {
        if (this.state.currentChatId === chat.id) {
            alert('Користувач закінчив розмову.');
            await this._updateState()
            return;
        }
        await this._updateState(this.state.currentChatId);
    }

    private _onEndChat = async () => {
        if (this.state.currentChatId === undefined) return;
        await UserRequests.endChat({ id: this.state.currentChatId });
        await this._updateState();
    }

    private _onStartChat = async () => {
        const response = RequestHandlers.onUnauthorizedResponse(await UserRequests.startChat());
        if (!response) return;
        this.setState({
            chats: [...this.state.chats, response.data.chat],
            currentChatId: response.data.chat.id,
            requestAmount: this.state.requestAmount - 1,
            messages: [],
        });
    }
}
