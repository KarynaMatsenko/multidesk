import TokenizedRequests from "./TokenizedRequests";
import { IGetUsersResponse, IPostUserRequest, IPostUserResponse, IDeleteUserRequest } from '../../../../../../express/multidesk-server/src/types'
import { AxiosPromise } from "axios";

export default class AdminRequests extends TokenizedRequests {
    public static getUsers = (): AxiosPromise<IGetUsersResponse> => {
        return TokenizedRequests._getRequest('/admin/users');
    }

    public static addUser = (body: IPostUserRequest): AxiosPromise<IPostUserResponse> => {
        return TokenizedRequests._postRequest('/admin/user', body);
    }

    public static deleteUser = (body: IDeleteUserRequest): AxiosPromise<undefined> => {
        return TokenizedRequests._deleteRequest('/admin/user', body);
    }
}
