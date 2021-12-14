import { useState } from "react";
import { useQuery } from "react-query";
import { COMPANY_KEY } from "../constants";
import { companySearch } from "../services/companyServices";
import { CompanyView } from "./companyView";


export const CompanyContainer = () => {

    const [searchText, setSearchText] = useState<string>();

    const { data,isFetching } = useQuery([COMPANY_KEY,searchText], () => { 
        return companySearch(searchText ?? ''); 
    }, { enabled: !!searchText,cacheTime:Infinity }) 
    return <CompanyView CompanySearchResult={data} setSearchText={setSearchText} isFetching={isFetching}/>

} 