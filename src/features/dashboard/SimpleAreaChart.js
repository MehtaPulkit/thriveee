import React from "react";
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
const data = [
    {
      "name": "Jan",
      "Last Year": 4000,
      "Current Year": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "Last Year": 3000,
      "Current Year": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "Last Year": 2000,
      "Current Year": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "Last Year": 2780,
      "Current Year": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "Last Year": 1890,
      "Current Year": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "Last Year": 2390,
      "Current Year": 3800,
      "amt": 2500
    },
    {
      "name": "July",
      "Last Year": 3490,
      "Current Year": 4300,
      "amt": 2100
    }
  ]
  
const SimpleAreaChart = () => {
  return (
    <AreaChart
      width={650}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="Last Year"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="Current Year"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default SimpleAreaChart;
