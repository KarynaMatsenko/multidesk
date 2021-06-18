import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminWindowState, AppState } from 'types';
import AddUser from './components/AddUser';
import Users from './components/Users';

interface IProps {
    adminWindowState: AdminWindowState;
}

class AdminWindow extends Component<IProps> {
    render = (): JSX.Element => {
        if (this.props.adminWindowState.inSettings) return <AddUser />
        else return <Users />
    }
}

const mapStateToProps = (state: AppState) => {
    return { adminWindowState: state.adminWindow };
};

export default connect(mapStateToProps)(AdminWindow);
