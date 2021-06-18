import { IMessage } from 'preloader/types'
import React, { Component } from 'react'
import { Message } from '../../../../../../../express/multidesk-server/src/entities';
import ChatBubble from '../ChatBubble'
import './Chat.module.css';

interface IProps {
    messages: Message[];
}

export default class Chat extends Component<IProps> {
    render = (): JSX.Element => {
        const sortedMessages = this.props.messages.sort((a, b) => a.id - b.id);
        return (
            <div className='chat'>
                {sortedMessages.map((message) => <ChatBubble message={message} key={message.id} />)}
            </div>
        )
    }
}
