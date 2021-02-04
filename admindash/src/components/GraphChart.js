import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    id: 1, views: 50, likes: 30, dislikes: 10, comments: 5
  },
  {
    id: 2, views: 60, likes: 45, dislikes: 20, comments: 25 
  },
  {
    id: 3, views: 90, likes: 53, dislikes: 80, comments: 30
  },
  {
    id: 4, views: 53, likes: 80, dislikes: 20, comments: 36
  },
  {
    id: 5, views: 100, likes: 35, dislikes: 30, comments: 46
  },
  {
    id: 6, views: 83, likes: 30, dislikes: 10, comments: 20
  },
  {
    id: 7, views: 76, likes: 47, dislikes: 23, comments: 3
  },
];

export default class GraphChart extends PureComponent {

  render() {
    return (
      <LineChart
        width={850}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="views" stroke="#8884d8" />
        <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
        <Line type="monotone" dataKey="dislikes" stroke="#ab750a" />
        <Line type="monotone" dataKey="comments" stroke="#3b729c" />
      </LineChart>
    );
  }
}
