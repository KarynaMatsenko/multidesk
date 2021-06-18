import React, { Component } from 'react';
import './BackButton.module.css';
import arrowLeft from './arrow-left.png';
import { AdminWindowActions } from 'redux/actions';
import { connect } from 'react-redux';

interface IProps {
    exitSettings: typeof AdminWindowActions.exitSettings;
}

class BackButton extends Component<IProps> {
    render = (): JSX.Element => {
        return (
            <div className="back-button" onClick={() => { this._handleClick() }}>
                <img src={arrowLeft} />
            </div>
        )
    }

    private _handleClick = (): void => {
        this.props.exitSettings();
    }
}

export default connect(
    null,
    { exitSettings: AdminWindowActions.exitSettings },
)(BackButton);
