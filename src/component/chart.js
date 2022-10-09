import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: '16:00', KRIK: 4000, MONO: 2400, BAT: 6530, amt: 2400 },
                { name: '18:00', KRIK: 3000, MONO: 1398, BAT: 4519, amt: 2210 },
                { name: '20:00', KRIK: 2000, MONO: 6800, BAT: 2800, amt: 2290 },
                { name: '22:00', KRIK: 2780, MONO: 3908, BAT: 4680, amt: 2000 },
                { name: '00:00', KRIK: 1890, MONO: 4800, BAT: 3470, amt: 2181 },
                { name: '02:00', KRIK: 2390, MONO: 3800, BAT: 3050, amt: 2500 },
                { name: '04:00', KRIK: 3490, MONO: 4300, BAT: 8160, amt: 2100 },
                { name: '06:00', KRIK: 3680, MONO: 3300, BAT: 4872, amt: 2100 },
                { name: '08:00', KRIK: 3100, MONO: 7300, BAT: 5878, amt: 2100 },
                { name: '10:00', KRIK: 5490, MONO: 5300, BAT: 6320, amt: 2100 },
                { name: '12:00', KRIK: 4490, MONO: 3800, BAT: 2300, amt: 2100 },
                { name: '14:00', KRIK: 6490, MONO: 4300, BAT: 4785, amt: 2100 },
            ]
        }
    }

    render() {
        const { data } = this.state;

        return (
            <ResponsiveContainer className="chart" height={300}>
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="KRIK" stroke="#4a90e2" />
                    <Line type="monotone" dataKey="MONO" stroke="#dd4e4e" />
                    <Line type="monotone" dataKey="BAT" stroke="#25b495" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default Chart;