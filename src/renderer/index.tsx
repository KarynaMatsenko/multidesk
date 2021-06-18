
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppStorage } from 'utils';
import Sockets from 'Sockets';
import { LoginActionTypes } from 'types';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

declare global {
  interface Window {
    api: {
      onLogout(listener: () => void): void;
      showContextMenu(): void;
    }
  }
}

window.api.onLogout(() => {
  AppStorage.token = undefined;
  Sockets.stop();
  store.dispatch({ type: LoginActionTypes.LOGOUT, payload: undefined });
});

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  if (AppStorage.userRole !== undefined) {
    window.api.showContextMenu();
  }
});
