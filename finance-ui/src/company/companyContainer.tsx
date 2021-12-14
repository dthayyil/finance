import { Grid } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { COMPANY_KEY, HISTORY_KEY } from "../constants";
import { company } from "../models/company";
import { companySearch, loadHistory } from "../services/companyServices";
import { CompanyView } from "./companyView";


export const CompanyContainer = () => {

    const [searchText, setSearchText] = useState<string>();
    const [selectedCompany,setSelectedCompany] = useState<company>();

    const { data,isFetching } = useQuery([COMPANY_KEY,searchText], () => { 
        return companySearch(searchText ?? ''); 
    }, { enabled: !!searchText,cacheTime:Infinity }) 

    const { data:history,isFetching:historyLoading } = useQuery([HISTORY_KEY,selectedCompany?.id], () => { 
        return loadHistory(selectedCompany?.id ?? 0); 
    }, { enabled: !!selectedCompany?.id,cacheTime:Infinity }) 

    console.log({history});

    return <Grid container>
    <CompanyView CompanySearchResult={data} 
    setSearchText={setSearchText} 
    isFetching={isFetching} 
    setSelectedCompany={setSelectedCompany}/></Grid>

} 