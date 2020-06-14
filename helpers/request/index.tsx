import axios from 'axios';
import { RequestType } from '../../models/RequestModels';

function request(requestType: RequestType, url: string, params: any): Promise<any> {
    // @ts-ignore
    return axios[requestType](url, params);
}

export { request };
