import { Grid, Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "../components/table";
import { COMPANY_KEY, HISTORY_KEY } from "../constants";
import { company } from "../models/company";
import { companySearch, loadHistory } from "../services/companyServices";
import { CompanyView } from "./companyView";


export const CompanyContainer = () => {

    const [searchText, setSearchText] = useState<string>();
    const [selectedCompany, setSelectedCompany] = useState<company>();

    const { data, isFetching } = useQuery([COMPANY_KEY, searchText], () => {
        return companySearch(searchText ?? '');
    }, { enabled: !!searchText, cacheTime: Infinity, keepPreviousData: true })

    const { data: history, isFetching: historyLoading } = useQuery([HISTORY_KEY, selectedCompany?.id], () => {
        return loadHistory(selectedCompany?.id ?? 0);
    }, { enabled: !!selectedCompany?.id, cacheTime: Infinity, keepPreviousData: true })

    const formatDate = (date: Date) => {
        return format(date, 'PP')
    }
    const columns: GridColDef[] = [
        {
            field: 'date', headerName: 'Date', width: 150, valueFormatter: (params) => {
                console.log(params.value)
                if (params.value) {
                    return formatDate(new Date(params.value as string));
                }
                else { return ''; }  
            }
        },
        { field: 'open', headerName: 'Open', width: 150,  valueFormatter: (params) => (params.value as number).toFixed(2) },
        { field: 'high', headerName: 'High', width: 150 ,valueFormatter: (params) => (params.value as number).toFixed(2) },
        { field: 'low', headerName: 'Low', width: 150,valueFormatter: (params) => (params.value as number).toFixed(2)  },
        { field: 'close', headerName: 'Close', width: 150,valueFormatter: (params) => (params.value as number).toFixed(2)  },
        { field: 'adjClose', headerName: 'Adj Close', width: 150 ,valueFormatter: (params) => (params.value as number).toFixed(2) },
        { field: 'volume', headerName: 'Volume', width: 150,valueFormatter: (params) => params.value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") , align:'right'  },
    ];

    return <Grid container spacing={3}>
        <CompanyView CompanySearchResult={data}
            setSearchText={setSearchText}
            isFetching={isFetching}
            setSelectedCompany={setSelectedCompany} />
        {
            history && (
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Table data={history} columns={columns} loading={historyLoading} />
                    </Paper>
                </Grid>
            )
        }
    </Grid>

} 