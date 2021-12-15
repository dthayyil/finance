import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { history } from '../models/history'
import { formatDate, formatDecimal, toFixedTwo } from '../utils';
import { Grid } from '@mui/material';




export const CardView = ({ data }: props) => {
  return (
    <Grid item margin={.2} >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {formatDate(new Date(data.date))}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Volume : ${formatDecimal(data.volume)}`} <br />
              {`Adj Close : ${ toFixedTwo(data.adjClose)}`}
            </Typography>

            <Typography variant="body2">
              {`Open : ${toFixedTwo(data.open)}`} - {`Close : ${toFixedTwo(data.close)}`}
            </Typography>
            <Typography variant="body2">
              {`Low : ${toFixedTwo(data.low)}`} - {`High : ${toFixedTwo(data.high)}`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}

interface props {
  data: history;
}