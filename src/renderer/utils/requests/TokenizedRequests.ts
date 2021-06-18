import { AxiosPromise } from "axios"
import TokenizedRequest from "./TokenizedRequest";

export default class TokenizedRequests extends TokenizedRequest {
    protected static _getRequest = (path: string, params?: unknown): AxiosPromise<any> => {
        return TokenizedRequests._makeRequest({ params, url: path, method: 'GET' });
    }
    
    protected static _postRequest = (path: string, data?: unknown): AxiosPromise<any> => {
        return TokenizedRequests._makeRequest({ data, url: path, method: 'POST' });
    }

    protected static _deleteRequest = (path: string, data?: unknown): AxiosPromise<any> => {
        return TokenizedRequests._makeRequest({ data, url: path, method: 'DELETE' });
    }
}
