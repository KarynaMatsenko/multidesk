import { AxiosPromise } from "axios"
import BaseRequest from "./BaseRequest";

export default class BaseRequests extends BaseRequest {
    protected static _getRequest = (path: string, params?: unknown): AxiosPromise<any> => {
        return BaseRequests._makeRequest({ params, url: path, method: 'GET' });
    }
    
    protected static _postRequest = (path: string, data?: unknown): AxiosPromise<any> => {
        return BaseRequests._makeRequest({ data, url: path, method: 'POST' });
    }

    protected static _deleteRequest = (path: string, data?: unknown): AxiosPromise<any> => {
        return BaseRequests._makeRequest({ data, url: path, method: 'DELETE' });
    }
}
