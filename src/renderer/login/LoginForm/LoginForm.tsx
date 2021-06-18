import React, { Component } from 'react';
import axios from 'axios';
import './LoginForm.module.css';
import { connect } from 'react-redux';
import { LoginActions } from '../../redux/actions'
import { LoginRequests } from 'utils';
import { Role } from 'types';

interface SubmitEvent extends Event {
    submitter: HTMLButtonElement;
}

interface IProps {
    login: typeof LoginActions.login;
}

class LoginForm extends Component<IProps> {
    public render = (): JSX.Element => {
        return (
            <form className='login-form' onSubmit={this._handleSubmit}>
                <input
                    type="login"
                    className="input"
                    name="login"
                    placeholder="Логін"
                    required
                />

                <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Пароль"
                    required
                />

                {/* <input type="submit" value="Увійти як диспейчер" />
                <input type="submit" value="Увійти як адміністратор" /> */}
                <button className="button" type="submit" name="action" value="user">Увійти як диспейчер</button>
                <button className="button" type="submit" name="action" value="admin">Увійти як адміністратор</button>
            </form>
        )
    }

    private _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            password: { value: string };
            action: { value: string };
        };

        const nativeEvent = event.nativeEvent as SubmitEvent;
        if (nativeEvent.submitter.value === 'user') {
            const result = await LoginRequests.loginUser({ login: target.login.value, password: target.password.value });
            if (result.data.token) {
                this.props.login(result.data.token, Role.User);
            } else {
                alert('Неправильний логін або/та пароль, спробуйте ще раз!');
            }
        } else {
            const result = await LoginRequests.loginAdmin({ login: target.login.value, password: target.password.value });
            if (result.data.token) {
                this.props.login(result.data.token, Role.Admin);
            } else {
                alert('Неправильний логін або/та пароль, спробуйте ще раз!');
            }
        }
    }
}

export default connect(
    null,
    { login: LoginActions.login },
)(LoginForm);
