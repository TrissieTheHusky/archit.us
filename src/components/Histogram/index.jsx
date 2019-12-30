import React from "react";
import {
  HorizontalGridLines,
  VerticalGridLines,
  VerticalRectSeries,
  XAxis,
  XYPlot,
  YAxis
} from "react-vis";
import useDarkMode from "use-dark-mode";
import { primaryColor, lightColor, darkColor } from "global.json";
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

  const myData = [
    { x0: 1, x: 2, y: 12 },
    { x0: 2, x: 4, y: 2 },
    { x0: 5, x: 6, y: 15 }
  ];

  return (
    <div className="chart-container">
      <XYPlot width={300} height={300}>
        <HorizontalGridLines style={gridStyle} />
        <VerticalGridLines style={gridStyle} />
        <XAxis style={axesStyle} tickValues={[0, 1, 3, 4, 5]} />
        <YAxis style={axesStyle} />
        <VerticalRectSeries data={myData} color={primaryColor} />
      </XYPlot>
    </div>
  );
};

export default Histogram;
