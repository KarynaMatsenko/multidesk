import React, { Component } from 'react';
import './Ticket.module.css';
import profilePicture from './account-circle.png';
// eslint-disable-next-line import/no-unresolved
import { ITicket } from 'preloader/types';

interface IProps {
    ticket: ITicket;
    active: boolean;
    onClick: () => void;
}

export default class Ticket extends Component<IProps> {
    render = (): JSX.Element => {
        let ticketClassName = 'ticket';
        if (this.props.active) ticketClassName += ' active';
        return (
            <div className={ticketClassName} onClick={() => { this.props.onClick() }}>
                <div className='profilePicture'>
                    <img src={profilePicture} />
                </div>
                Користувач №{this.props.ticket.id.toString()}
            </div>
        )
    }
}
