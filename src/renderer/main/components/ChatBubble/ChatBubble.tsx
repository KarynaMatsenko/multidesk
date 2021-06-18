
import React, { Component } from 'react'
import type { Message } from '../../../../../../../express/multidesk-server/src/entities';
import './ChatBubble.module.css';

interface IProps {
    message: Message;
}

export default class ChatBubble extends Component<IProps> {
    render = (): JSX.Element => {
        const bubbleClassName = this.props.message.fromUser ? 'send' : 'receive';
        return (
            <p className={'message ' + bubbleClassName}>{this.props.message.content}</p>
        )
    }
}
