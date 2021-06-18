import axios, { AxiosPromise, AxiosRequestConfig } from "axios"

export default class BaseRequest {
    protected static _makeRequest = (request: AxiosRequestConfig): AxiosPromise<any> => {
        return axios({ validateStatus: (status) => status < 600, ...request });
    }
}
