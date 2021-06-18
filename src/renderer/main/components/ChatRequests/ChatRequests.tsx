import React, { Component } from 'react'
import './ChatRequests.module.css'

interface IProps {
    requestAmount: number;
    onStartChat: () => void;
}

export default class ChatRequests extends Component<IProps> {
    render = (): JSX.Element => {
        return (
            <div className='chat-requests' onClick={() => { this.props.onStartChat() }}>
                <div className='requests-amount'>
                    <span>{this.props.requestAmount.toString()}</span>
                </div>
                Почати розмову
            </div>
        )
    }
}
