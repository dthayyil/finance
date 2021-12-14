import axios from 'axios';
import { config } from '../config';
import { company } from '../models/company';


export const companySearch = async (text: string): Promise<company[] | undefined> => {
    try {
        const url = `${config.baseUrl}/Company/Search?text=${text}`
        const res = await axios.get(url);
        return res.data;
    } catch (error: unknown) {
        console.log(error)
    }
}