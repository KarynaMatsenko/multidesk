import React, { Component } from 'react';
import AddUserButton from '../AddUserButton';
import './Users.module.css';
import User from '../User';
import { AdminRequests, RequestHandlers } from 'utils';

interface IUserData {
    id: number;
    login: string;
}

interface IState {
    users: IUserData[];
}

export default class Users extends Component<unknown, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = (): void => {
        this._updateUsers()
    }
    
    render = (): JSX.Element => {
        return (
            <div className="admin">
                <div className="users">
                    { this.state.users.map((user) => <User login={user.login} id={user.id} onUserDelete={() => this._updateUsers()} key={user.id} />) }
                </div>
                <AddUserButton />
            </div>
        )
    }

    private _updateUsers = async (): Promise<void> => {
        const response = RequestHandlers.onUnauthorizedResponse(await AdminRequests.getUsers());
        if (response) {
            this.setState({ users: response.data.users });
        }
    }
}
