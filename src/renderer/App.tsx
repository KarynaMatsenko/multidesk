import LoginWindow from './login';
import React, { Component, ReactElement } from 'react'
import MainWindow from './main';
import AdminWindow from './admin';
import AddUser from './admin/components/AddUser';
import { AppStorage } from './utils';
import { connect } from 'react-redux';
import { AppState, LoginState } from './types';

enum Role {
    User,
    Admin,
}

interface IProps {
    loginState: LoginState;
}

class App extends Component<IProps> {
    render = (): JSX.Element => {
        const token = this.props.loginState.token;
        const role = this.props.loginState.userRole;

        return (
            <div>
                { token ? role === Role.Admin ? <AdminWindow /> : <MainWindow /> : <LoginWindow /> }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return { loginState: state.login };
};

export default connect(mapStateToProps)(App);


