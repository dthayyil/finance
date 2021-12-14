import axios from 'axios';
import { config } from '../config';
import { company } from '../models/company';
import { history } from '../models/history';

export const companySearch = async (text: string): Promise<company[] | undefined> => {
    try {
        const url = `${config.baseUrl}/Company/Search?text=${text}`
        const res = await axios.get(url);
        return res.data;
    } catch (error: unknown) {
        console.log(error)
    }
}
 

export const loadHistory = async (companyId: number): Promise<history[] | undefined> => {
    try {
        const url = `${config.baseUrl}/Company/History?id=${companyId}`
        const res = await axios.get(url);
        return res.data;
    } catch (error: unknown) {
        console.log(error)
    }
}