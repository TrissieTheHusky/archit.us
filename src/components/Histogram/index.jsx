import React from "react";
import useDarkMode from "use-dark-mode";
import { primaryColor, lightColor, darkColor } from "global.json";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip
} from "recharts";
import "./style.scss";

const Histogram = () => {
  const { value } = useDarkMode(true);

  const axesStyle = {
    text: {
      fill: value ? lightColor : darkColor,
      fontWeight: 300
    },
    ticks: {
      fill: value ? lightColor : darkColor
    }
  };

  const gridStyle = { stroke: value ? lightColor : darkColor };

  const data = [
    {
      name: "Page A",
      uv: 4000
    },
    {
      name: "Page B",
      uv: 3000
    },
    {
      name: "Page C",
      uv: 2000
    }
  ];

  return (
    <div className="chart-container">
      <BarChart width={730} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Bar
          dataKey="uv"
          fill={primaryColor}
          isAnimationActive={true}
          animationDuration={6000}
        />
      </BarChart>
    </div>
  );
};

export default Histogram;
