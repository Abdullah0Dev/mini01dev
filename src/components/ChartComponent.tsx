// ChartComponent.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { time: "08:00", open: 0.06642, high: 0.0682, low: 0.0662, close: 0.0682 },
  { time: "09:00", open: 0.067, high: 0.068, low: 0.066, close: 0.067 },
  { time: "10:00", open: 0.067, high: 0.0682, low: 0.0665, close: 0.068 },
  // Add more data based on your design.
];

const ChartComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-white shadow-lg rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
          <XAxis dataKey="time" />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            dot={false}
            strokeWidth={2}
            animationDuration={500}
          />
          <Line
            type="monotone"
            dataKey="open"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={2}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
