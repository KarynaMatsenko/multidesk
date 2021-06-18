import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ITicket } from 'preloader/types';
import TicketList from '../TicketList/TicketList';
import './Sidebar.module.css';
import { ChatRequests } from '../ChatRequests';
import type { Chat } from '../../../../../../../express/multidesk-server/src/entities';

const testTickets: ITicket[] = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
]

interface IProps {
    tickets: ITicket[]
    currentChatId: number | undefined;
    onTicketChange: (id: number) => void;
    requestAmount: number;
    onStartChat: () => void;
}

export default class Sidebar extends Component<IProps> {
    render = (): JSX.Element => (
        <div className='sidebar'>
            <TicketList tickets={this.props.tickets} currentChatId={this.props.currentChatId} onTicketChange={(id) => { this.props.onTicketChange(id) }} />
            <ChatRequests requestAmount={this.props.requestAmount} onStartChat={ () => { this.props.onStartChat() } } />
        </div>
    )
}
