import { AxiosResponse } from "axios";
import store from "redux/store"
import Sockets from "Sockets";
import { LoginActionTypes } from "types"

export default class RequestHandlers {
    public static onUnauthorizedResponse = <T>(response: AxiosResponse<T>): AxiosResponse<T> | undefined => {
        if (response.status === 403) {
            alert('Сессія закінчилась.');
            Sockets.stop();
            store.dispatch({ type: LoginActionTypes.LOGOUT, payload: undefined });
            return;
        }
        return response;
    }
}
