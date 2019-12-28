import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import "./style.scss";

const Counter = ({ value, title }) => {
  return (
    <div className="counter-container">
      <p className="title">{title}</p>
      <CountUp start={0} end={value} duration={2} redraw={true} />
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string
};
