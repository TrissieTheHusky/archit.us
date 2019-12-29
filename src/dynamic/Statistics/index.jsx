import Counter from "components/Counter";
import Histogram from "components/Histogram";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { getGuildStats } from "store/actions";
import { useDispatch } from "react-redux";
import "./style.scss";

function Statistics({ guildId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuildStats(guildId));
  }, []);

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
