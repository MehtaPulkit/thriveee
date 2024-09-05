import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2022",
    Online: 4000,
    Offline: 2400,
  },
  {
    name: "2023",
    Online: 3000,
    Offline: 1398,
  },
  {
    name: "2024",
    Online: 2000,
    Offline: 9800,
  },
];

const SimpleBarGraph = () => {
  return (
    <BarChart width={300} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Offline" fill="#8884d8" />
      <Bar dataKey="Online" fill="#82ca9d" />
    </BarChart>
  );
};
export default SimpleBarGraph;
