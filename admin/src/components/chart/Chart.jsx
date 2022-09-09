import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, aspect }) => {
  const { orders } = useSelector((state) => state.orders);
  const allData = orders.data;
  const data = [
    { name: "January", Total: allData !== undefined && allData[0].amount },
    { name: "February", Total: allData !== undefined && allData[1].amount },
    { name: "March", Total: allData !== undefined && allData[2].amount },
    { name: "April", Total: allData !== undefined && allData[3].amount },
    { name: "May", Total: allData !== undefined && allData[4].amount },
    { name: "June", Total: allData !== undefined && allData[5].amount },
    { name: "July", Total: allData !== undefined && allData[6].amount },
    { name: "August", Total: allData !== undefined && allData[7].amount },
    { name: "September", Total: allData !== undefined && allData[8].amount },
    { name: "October", Total: allData !== undefined && allData[9].amount },
  ];
  return (
    <div className="chart">
      <div className="chart__title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
