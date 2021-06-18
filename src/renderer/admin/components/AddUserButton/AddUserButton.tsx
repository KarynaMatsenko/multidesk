import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminWindowActions } from 'redux/actions';
import './AddUserButton.module.css';

interface IProps {
    enterSettings: typeof AdminWindowActions.enterSettings;
}

class AddUserButton extends Component<IProps> {
    render = (): JSX.Element => {
        return (
            <button className="button add-user-button" onClick={() => { this._handleClick() }}>Додати диспетчера</button>
        )
    }

    private _handleClick = (): void => {
        this.props.enterSettings();
    }
}

export default connect(
    null,
    { enterSettings: AdminWindowActions.enterSettings },
)(AddUserButton);
