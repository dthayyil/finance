import { Grid, IconButton, Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { Cards } from "../components/cards";
import { Chart } from "../components/chart";
import { Table } from "../components/table";
import { COMPANY_KEY, HISTORY_KEY } from "../constants";
import { company } from "../models/company";
import { companySearch, loadHistory } from "../services/companyServices";
import { formatDate, formatDecimal, toFixedTwo } from "../utils";
import { CompanyView } from "./companyView";
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';

export const CompanyContainer = () => {

    const [searchText, setSearchText] = useState<string>();
    const [selectedCompany, setSelectedCompany] = useState<company>();
    const [isCardView, setIsCardView] = useState<Boolean>(false);

    const { data, isFetching } = useQuery([COMPANY_KEY, searchText], () => {
        return companySearch(searchText ?? '');
    }, { enabled: !!searchText, cacheTime: Infinity, keepPreviousData: true })

    const { data: history, isFetching: historyLoading } = useQuery([HISTORY_KEY, selectedCompany?.id], () => {
        return loadHistory(selectedCompany?.id ?? 0);
    }, { enabled: !!selectedCompany?.id, cacheTime: Infinity, keepPreviousData: true })


    const columns: GridColDef[] = [
        {
            field: 'date', headerName: 'Date', width: 150, valueFormatter: (params) => {
                if (params.value) {
                    return formatDate(new Date(params.value as string));
                }
                else { return ''; }
            }
        },
        { field: 'open', headerName: 'Open', width: 150, valueFormatter: (params) => toFixedTwo((params.value as number)) },
        { field: 'high', headerName: 'High', width: 150, valueFormatter: (params) => toFixedTwo((params.value as number)) },
        { field: 'low', headerName: 'Low', width: 150, valueFormatter: (params) => toFixedTwo((params.value as number)) },
        { field: 'close', headerName: 'Close', width: 150, valueFormatter: (params) => toFixedTwo((params.value as number)) },
        { field: 'adjClose', headerName: 'Adj Close', width: 150, valueFormatter: (params) => toFixedTwo((params.value as number)) },
        { field: 'volume', headerName: 'Volume', width: 150, valueFormatter: (params) => formatDecimal(params.value as number), align: 'right' },
    ];

    return <Grid container spacing={3}>
        <Grid item xs={12} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid container>
                    <Grid item xs={4} >
                        <CompanyView
                            CompanySearchResult={data}
                            setSearchText={setSearchText}
                            isFetching={isFetching}
                            setSelectedCompany={setSelectedCompany}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="grid-view" disabled={!!isCardView} onClick={() => setIsCardView(true)}>
                            <GridViewIcon />
                        </IconButton>
                        <IconButton aria-label="list-view" disabled={!isCardView} onClick={() => setIsCardView(false)}  >
                            <TableRowsIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        {history &&
            <Grid item xs={12} >
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Chart data={history} />
                </Paper>
            </Grid>
        }
        {
            history && (
                isCardView ? (<Cards data={history} />) : (
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Table data={history} columns={columns} loading={historyLoading} />
                        </Paper>
                    </Grid>)
            )
        }
    </Grid>

} 