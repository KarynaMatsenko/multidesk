import React, { Component } from 'react';
import { AdminRequests, RequestHandlers } from 'utils';
import './User.module.css';

interface IProps {
    login: string;
    id: number;
    onUserDelete: () => void;
}

export default class User extends Component<IProps> {
    render = (): JSX.Element => {
        return (
            <div className="user">
                <div className="user-login"><span>{this.props.login}</span></div>
                <button className="button delete-button" onClick={() => { this._handleClick() }}>Видалити</button>
            </div>
        )
    }

    private _handleClick = async () => {
        const confirmation = confirm('Ви точно бажаете видалити цього користувача?');
        if (!confirmation) return;
        const response = RequestHandlers.onUnauthorizedResponse(await AdminRequests.deleteUser({ id: this.props.id }));
        if (response) this.props.onUserDelete();
    }
}
