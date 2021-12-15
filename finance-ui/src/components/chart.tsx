import { FormControlLabel, Grid, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { history } from '../models/history'
import { formatDate } from '../utils';


export const Chart = ({ data }: props) => {
    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(true);
    const [close, setClose] = useState<boolean>(false);
    const [low, setLow] = useState<boolean>(false);
    const [high, setHigh] = useState<boolean>(false);
    const [adjClose, setAdjClose] = useState<boolean>(false);


    return (
        < >
            <Grid>
                <FormControlLabel
                    value="open"
                    control={<Switch color="primary" checked={open} onChange={e => setOpen(e.target.checked)} />}
                    label="Open"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="close"
                    control={<Switch color="secondary" checked={close} onChange={e => setClose(e.target.checked)} />}
                    label="Close"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="low"
                    control={<Switch color="warning" checked={low} onChange={e => setLow(e.target.checked)} />}
                    label="Low"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="high"
                    control={<Switch color="success" checked={high} onChange={e => setHigh(e.target.checked)} />}
                    label="High"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="adjClose"
                    control={<Switch color="error" checked={adjClose} onChange={e => setAdjClose(e.target.checked)} />}
                    label="Adj Close"
                    labelPlacement="top"
                />


            </Grid>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="date"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                        tickFormatter={(e) => formatDate(new Date(e))}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >

                    </YAxis>
                    {
                        open && (<Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="open"
                            stroke={theme.palette.primary.main}
                            dot={false}
                        />)
                    }

                    {
                        close && (<Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="close"
                            stroke={theme.palette.secondary.main}
                            dot={false}
                        />)
                    }
                    {
                        low && (<Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="low"
                            stroke={theme.palette.warning.main}
                            dot={false}
                        />)
                    }

                    {
                        high && (<Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="high"
                            stroke={theme.palette.success.main}
                            dot={false}
                        />)
                    }


                    {
                        adjClose && (<Line
                            isAnimationActive={false}
                            type="monotone"
                            dataKey="adjClose"
                            stroke={theme.palette.error.main}
                            dot={false}
                        />)
                    }



                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

interface props {
    data: history[]
}