import React from "react";
import { Container } from "react-bootstrap";
import Counter from "components/Counter";
import Histogram from "components/Histogram";
import PropTypes from "prop-types";
import "./style.scss";

function Statistics({ guildId }) {
  return (
    <Container className="statistics-container" fluid>
      <h2>Statistics</h2>
      <Counter value={1234} title={"Members"} />
      <Counter value={502643} title={"Messages"} />
      <Histogram />
    </Container>
  );
}

export default Statistics;

Statistics.propTypes = {
  guildId: PropTypes.string
};
