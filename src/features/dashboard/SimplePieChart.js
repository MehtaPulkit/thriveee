import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "NSW", value: 400 },
  { name: "VIC", value: 300 },
  { name: "QLD", value: 300 },
  { name: "WA", value: 200 },
];

const COLORS = ["#8884d8c7", "#2b5ed38f", "#ffbb289e", "#82ca9db5"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const SimplePieChart = () => {
  return (
    <PieChart width={300} height={300}>
      <Legend />
      <Pie
        data={data}
        cx={150}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
