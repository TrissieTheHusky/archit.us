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
import "./style.scss";

const Histogram = () => {
  const { value } = useDarkMode(true);

  const myData = [
    { x: 0, x0: 1, y: 10, y0: 0 },
    { x: 1, x0: 2, y: 5, y0: 0 },
    { x: 2, x0: 4, y: 15, y0: 0 }
  ];
  return (
    <div className="chart-container">
      <XYPlot width={300} height={300}>
        <VerticalRectSeries data={myData} color={"#6496c4"} />
        <HorizontalGridLines style={{ stroke: "white" }} />
        <VerticalGridLines style={{ stroke: "white" }} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default Histogram;
