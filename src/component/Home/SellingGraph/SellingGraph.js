import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const SellingGraph = () => {
  const data = [
    { name: "Baby Cycle", Profit: 4200, sellingPrice: 179, amt: 2400 },
    { name: "Boy Cycle", Profit: 3700, sellingPrice: 200, amt: 2400 },
    { name: "Girl Cycle", Profit: 2500, sellingPrice: 150, amt: 2400 },
    {
      name: "MultiFunctional Cycle",
      Profit: 2400,
      sellingPrice: 210,
      amt: 2400,
    },
    { name: "Gear Cycle", Profit: 4500, sellingPrice: 240, amt: 240 },
  ];
  return (
    <div className="container w-100">
      <h2 className="text-center text-success fw-light">
        This Month Profit and Selling Price Graph
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="Profit" stroke="#8884d8" />
          <Line type="monotone" dataKey="sellingPrice" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellingGraph;
