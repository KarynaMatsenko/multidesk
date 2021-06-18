import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.module.css';

export default class LoginWindow extends Component {
    render = (): JSX.Element => {
        return (
            <div className="login">
                <h1>Вас вітає MultiDesk!</h1>
                <LoginForm />
            </div>
        )
    }
}
