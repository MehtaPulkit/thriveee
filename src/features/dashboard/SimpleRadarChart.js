import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
      subject: 'Quality',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Supply',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Operations',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Management',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Resources',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Technology',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
const SimpleRadarChart = () => {
  return (
    <RadarChart
    cx={180}
    cy={150}
    outerRadius={90}
    width={360}
    height={330}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.6}
    />
  </RadarChart>
  );
};

export default SimpleRadarChart;
