import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ITicket } from 'preloader/types';
import Ticket from '../Ticket';
import './TicketList.module.css';

interface IProps {
    tickets: ITicket[];
    currentChatId: number | undefined;
    onTicketChange: (id: number) => void;
}

export default class TicketList extends Component<IProps> {
    render = (): JSX.Element => (
        <div className='ticket-list'>
            {this.props.tickets.map((ticket) => {
                let active = false;
                if (ticket.id === this.props.currentChatId) active = true;
                return <Ticket ticket={ticket} key={ticket.id} active={active} onClick={() => { this.props.onTicketChange(ticket.id) }} />;
            })}
        </div>
    )
}
