import React, { Component } from 'react'
import type { Message } from '../../../../../../../express/multidesk-server/src/entities';
import './ChatInput.module.css'
import sendPicture from './send.png';

interface IProps {
    onNewMessage: (message: string) => void;
}

interface IState {
    value: string;
}

export default class ChatInput extends Component<IProps, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            value: '',
        }
    }

    private _onSendButtonClick = () => {
        if (this.state.value.length !== 0) {
            this.props.onNewMessage(this.state.value);
            this.setState({ value: '' });
        }
    }

    private _handleChange = (event: any) => {
        this.setState({value: event.target.value});
    }

    private _handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            this._onSendButtonClick()
        }
    }

    render = (): JSX.Element => {
        return (
            <div className='chat-input'>
                <input value={this.state.value} onChange={(event) => { this._handleChange(event) }} onKeyDown={this._handleKeyDown} />
                <div className='send-button' onClick={() => { this._onSendButtonClick() }} ><img src={sendPicture} /></div>
            </div>
        )
    }
}
