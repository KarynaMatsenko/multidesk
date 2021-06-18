export interface ITicket {
    id: number;
}

export interface IMessage {
    id: number;
    content: string;
    incoming: boolean;
    date: Date;
}
