import { AdminWindowActionTypes, LoginActionTypes, Role } from "./enums";

type Action<Type, State> = {
    type: Type,
    payload?: Partial<State>,
}

export interface LoginState {
    token: string | undefined;
    userRole: Role | undefined;
}

export type LoginAction = Action<LoginActionTypes, LoginState>;

export interface AdminWindowState {
    inSettings: boolean;
}

export type AdminWindowAction = Action<AdminWindowActionTypes, AdminWindowState>;

export interface AppState {
    login: LoginState;
    adminWindow: AdminWindowState;
}
