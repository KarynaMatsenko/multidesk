import React, { Component } from 'react';
import './ChatBar.module.css';
import close from './close.png';

interface IProps {
    ticketId: number | undefined;
    onEndChat: () => void;
}

export default class ChatBar extends Component<IProps> {
    render = (): JSX.Element => {
        if (this.props.ticketId === undefined) {
            return (
                <div className='chat-bar'>
                </div>
            )
        }
        return (
            <div className='chat-bar'>
                <p>Користувач №{this.props.ticketId}</p>
                <div className='close-button' onClick={() => { this.props.onEndChat() }}><img src={close} /></div>
            </div>
        )
    }
}
