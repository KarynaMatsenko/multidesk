import { IMessage } from 'preloader/types';
import React, { Component } from 'react'
import Chat from '../Chat';
import ChatBar from '../ChatBar';
import ChatInput from '../ChatInput';
import type { Message } from '../../../../../../../express/multidesk-server/src/entities'
import './ChatWindow.module.css';

const testMessages: IMessage[] = [
    {
        id: 1,
        content: 'Доброго дня, чи можете Ви мені надати допомогу?',
        date: new Date(),
        incoming: true,
    },
    {
        id: 2,
        content: 'Добрий день! Так, звісно, чим можу Вам допомогти?',
        date: new Date(),
        incoming: false,
    },
    {
        id: 3,
        content: 'Коли я отримаю трек-номер відстеження онлайн-замовленния #652?',
        date: new Date(),
        incoming: true,
    },
    {
        id: 4,
        content: 'Зараз дізнаюсь про статус вашого замовлення.',
        date: new Date(),
        incoming: false,
    },
    {
        id: 5,
        content: 'Протягом 5 хвилин я надам Вам відповідь.',
        date: new Date(),
        incoming: false,
    },
]

interface IProps {
    currentChatId: number | undefined;
    messages: Message[];
    onNewMessage: (message: string) => void;
    onEndChat: () => void;
}

export default class ChatWindow extends Component<IProps> {
    render = (): JSX.Element => {
        return (
            <div className='chat-window'>
                <ChatBar ticketId={this.props.currentChatId} onEndChat={ () => { this.props.onEndChat() } } />
                <Chat messages={this.props.messages} />
                <ChatInput onNewMessage={(message) => { this.props.onNewMessage(message) }} />
            </div>
        )
    }
}
