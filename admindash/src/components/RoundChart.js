import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Legend
} from 'recharts';

const data = [
  { name: 'Public', value: 400 },
  { name: 'Private', value: 300 },
  { name: 'Unlisted', value: 300 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class RoundChart extends PureComponent {
  render() {
    return (
      <PieChart width={320} height={250}>
          <Legend />
        <Pie
          data={data}
          cx={170}
          cy={110}
          labelLine={false}
          nameKey='name'
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
 