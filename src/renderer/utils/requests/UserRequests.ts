import TokenizedRequests from "./TokenizedRequests";
import { IPostEndChatRequest, IGetChatMessagesResponse, IGetChatMessagesRequest, IGetChatsResponse, IGetAvailableChatsResponse, IPostStartChatResponse } from '../../../../../../express/multidesk-server/src/types'
import { AxiosPromise } from "axios";

export default class UserRequests extends TokenizedRequests {
    public static getAllUserChats = (): AxiosPromise<IGetChatsResponse> => {
        return TokenizedRequests._getRequest('/user/chats');
    }

    public static startChat = (): AxiosPromise<IPostStartChatResponse> => {
        return TokenizedRequests._postRequest('/user/chat/start');
    }

    public static endChat = (body: IPostEndChatRequest): AxiosPromise<undefined> => {
        return TokenizedRequests._postRequest('/user/chat/end', body);
    }

    public static getMessages = (body: IGetChatMessagesRequest): AxiosPromise<IGetChatMessagesResponse> => {
        return TokenizedRequests._getRequest('/user/chat/messages', body);
    }

    public static getNumberOfAvailableChats = (): AxiosPromise<IGetAvailableChatsResponse> => {
        return TokenizedRequests._getRequest('/user/chats/available');
    }
}
