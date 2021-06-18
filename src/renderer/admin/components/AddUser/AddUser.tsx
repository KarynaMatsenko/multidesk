import React, { Component } from 'react';
import './AddUser.module.css';
import BackButton from '../BackButton';
import { AdminRequests, RequestHandlers } from 'utils';

export default class AddUser extends Component {
    public render = (): JSX.Element => {
        return (
            <div className="add-user-window">
                <h2>Створення нового облікового запису</h2>
                <form className='add-user-form' onSubmit={this._handleSubmit}>
                    <input
                        type="login"
                        className="input"
                        name="login"
                        placeholder="Логін"
                        required
                    />

                    <input
                        type="text"
                        className="input"
                        name="password"
                        placeholder="Пароль"
                        required
                    />
                    <button className="button" type="submit" name="action" value="create">Створити</button>
                </form>
                <BackButton />
            </div>
        )
    }

    private _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            password: { value: string };
        };

        const response = RequestHandlers.onUnauthorizedResponse(await AdminRequests.addUser({ login: target.login.value, password: target.password.value }));
        if (response?.data.user) {
            alert('Корисутвач успішно створений!');
        } else {
            alert('Невдалося стоврити користувача.');
        }
    }
}
