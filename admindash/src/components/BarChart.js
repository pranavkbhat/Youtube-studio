import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        label: "Jan",
        value: 290
      },
      {
        label: "Feb",
        value: 260
      },
      {
        label: "Mar",
        value: 180
      },
      {
        label: "Apr",
        value: 140
      },
      {
        label: "May",
        value: 115
      },
      {
        label: "Jun",
        value: 100
      },
      {
        label: "Jul",
        value: 30
      },
      {
        label: "Aug",
        value: 60
      },
      {
          label: "Sep",
          value: 75
      },
      {
          label: "Oct",
          value: 10
      },
          {
          label: "Nov",
          value: 35
      },
      {
          label: "Dec",
          value: 30
      },
];

export default class BarChart2 extends PureComponent {

  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#2196f3" />
      </BarChart>
    );
  }
}
