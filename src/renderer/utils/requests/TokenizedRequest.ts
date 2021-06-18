import { AxiosPromise, AxiosRequestConfig } from "axios"
import BaseRequest from "./BaseRequest";

export default class TokenizedRequest extends BaseRequest {
    protected static _makeRequest = (request: AxiosRequestConfig): AxiosPromise<any> => {
        const token = localStorage.getItem('token');
        request.headers = { 'X-Access-Token': token, ...request.headers };
        return BaseRequest._makeRequest(request);
    }
}
