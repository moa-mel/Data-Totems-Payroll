import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart ({title, data, dataKey, grid}){

    return(
        <div className="chart">
          <h3 className="chartTitle"> {title} </h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
             <LineChart data={data}>
            { grid && <CartesianGrid strokeDasharray="3 3" /> }
          <XAxis dataKey="name" />
          <Tooltip />
         {/* <Legend /> */}
          <Line dataKey={dataKey} stackId="a" fill="#8884d8" />
          <Line dataKey={dataKey} stackId="a" fill="#82ca9d" />
             </LineChart>
          </ResponsiveContainer>
        </div>
    )
}
