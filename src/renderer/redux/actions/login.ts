import { LoginAction, LoginActionTypes, Role } from "../../types";

export default class LoginActions {
    public static login = (token: string, userRole: Role): LoginAction => ({
        type: LoginActionTypes.LOGIN,
        payload: {
            token,
            userRole,
        }
    })

    public static logout = (): LoginAction => ({
        type: LoginActionTypes.LOGOUT,
    })
}
