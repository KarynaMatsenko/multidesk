import { LoginActionTypes, LoginState } from "../../types";
import { AppStorage } from "../../utils";

const initialState: LoginState = {
    token: AppStorage.token,
    userRole: AppStorage.userRole,
}

export default (state = initialState, action: { type: LoginActionTypes, payload: any }): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            AppStorage.token = action.payload.token;
            AppStorage.userRole = action.payload.userRole;
            return {
                token: action.payload.token,
                userRole: action.payload.userRole,
            }
        case LoginActionTypes.LOGOUT:
            AppStorage.token = undefined;
            AppStorage.userRole = undefined;
            return {
                token: undefined,
                userRole: undefined,
            }
        default:
            return state;
    }
}
