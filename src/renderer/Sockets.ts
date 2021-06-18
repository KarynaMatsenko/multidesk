import { baseURL } from './configuration';
import socketIO, { Socket } from 'socket.io-client';
import { IMessageRequest } from '../../../../express/multidesk-server/src/types';
import type { Chat, Message } from '../../../../express/multidesk-server/src/entities';

interface ISocketEvents {
    'new-message': (message: Message) => void;
    'available-chat': (availableChatAmount: number) => void;
    'chat-ended': (chat: Chat) => void;
}

interface ISocketEmitEvents {
    'new-message': (message: IMessageRequest) => void;
}

type MySocket = Socket<ISocketEvents, ISocketEmitEvents>;

export default class Sockets {
    private static _socket: MySocket | undefined;

    private constructor() {}

    public static start = (token: string): void => {
        Sockets._socket = socketIO(baseURL, { query: { token } });
    }

    public static stop = (): void => {
        Sockets._socket?.disconnect();
        Sockets._socket = undefined;
    }

    public get socket(): MySocket | undefined {
        return Sockets._socket;
    }

    public static newMessage = (message: IMessageRequest): void => {
        Sockets._socket?.emit('new-message', message);
    }

    public static onNewMessage = (listener: ISocketEvents['new-message']): void => {
        Sockets._socket?.on('new-message', listener);
    }

    public static onAvailableChat = (listener: ISocketEvents['available-chat']): void => {
        Sockets._socket?.on('available-chat', listener);
    }

    public static onChatEnded = (listener: ISocketEvents['chat-ended']): void => {
        Sockets._socket?.on('chat-ended', listener);
    }
}
