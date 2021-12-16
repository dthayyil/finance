import { Grid, Pagination, Paper } from '@mui/material';
import { useState } from 'react';
import { history } from '../models/history'
import { CardView } from './card';
import usePagination from './paginations';

export const Cards = ({ data }: props) => {
    let [page, setPage] = useState<number>(1);
    const PER_PAGE = 24;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination<history>(data, PER_PAGE);

    const handleChange = (_e: any, p: number) => {
        setPage(p);
        _DATA.jump(p);
    };
    return (
        <Grid item xs={12}> 
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Pagination count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                    style={{marginBottom:10}}
                />
                <Grid container >
                    {_DATA?.currentData()?.map(x => (
                        <CardView data={x} key={x.date.valueOf()} />
                    ))}
                </Grid>
            </Paper>
        </Grid>
    );
}

interface props {
    data: history[];
}