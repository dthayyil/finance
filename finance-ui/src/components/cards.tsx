import { Grid, Paper } from '@mui/material';
import { history } from '../models/history'
import { CardView } from './card';

export const Cards = ({ data }: props) => {
    return (
        <Grid item xs={12}> 
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                     <Grid container >
                        {data.map(x => ( 
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