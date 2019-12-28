import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalRectSeries,
  VerticalGridLines,
  HorizontalGridLines
} from "react-vis";
import { Container } from "react-bootstrap";
import "./style.scss";

const Histogram = () => {
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
