import React from 'react'
import './Chart.scss'
import { AreaChart, Area, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5777f2" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#5777f2" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    {grid && <CartesianGrid strokeDasharray={10} />}
                    <Area type="monotone" dataKey={dataKey} stroke="#001061" fillOpacity={1} fill="url(#colorData)" />
                    <XAxis dataKey="name" />

                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Chart
