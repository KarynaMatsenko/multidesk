import BaseRequests from "./BaseRequests";
import { IPostUserRequest, IPostLoginResponse, IPostCheckTokenRequest } from '../../../../../../express/multidesk-server/src/types'
import { AxiosPromise } from "axios";

export default class LoginRequests extends BaseRequests {
    public static checkToken = (body: IPostCheckTokenRequest): AxiosPromise<undefined> => {
        return LoginRequests._postRequest('/login/checkToken', body);
    }
    
    public static loginAdmin = (body: IPostUserRequest): AxiosPromise<IPostLoginResponse> => {
        return LoginRequests._postRequest('/login/admin', body);
    }

    public static loginUser = (body: IPostUserRequest): AxiosPromise<IPostLoginResponse> => {
        return LoginRequests._postRequest('/login/user', body);
    }
}
