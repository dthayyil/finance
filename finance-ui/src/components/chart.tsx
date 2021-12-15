import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { history } from '../models/history'
 

export const Chart = ({ data }: props) => {
    const theme = useTheme();
    return (
        <React.Fragment>
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
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                     
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="open"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                    {/* <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="high"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="low"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="low"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                     <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="adjClose"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    /> */}
                    
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

interface props {
    data: history[]
}