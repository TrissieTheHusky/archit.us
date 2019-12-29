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
    { x: 0, x0: 1, y: 10, y0: 0 },
    { x: 1, x0: 2, y: 5, y0: 0 },
    { x: 2, x0: 4, y: 15, y0: 0 }
  ];
  return (
    <div className="chart-container">
      <XYPlot xDomain={[0, 8]} width={300} height={300}>
        <VerticalRectSeries data={myData} color={primaryColor} />
        <HorizontalGridLines style={gridStyle} />
        <VerticalGridLines style={gridStyle} />
        <XAxis style={axesStyle} />
        <YAxis style={axesStyle} />
      </XYPlot>
    </div>
  );
};

export default Histogram;
