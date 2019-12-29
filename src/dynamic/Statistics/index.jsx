import Counter from "components/Counter";
import Histogram from "components/Histogram";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGuildStats } from "store/actions";
import "./style.scss";

function Statistics({ guildId }) {
  const dispatch = useDispatch();

  const { memberCount, messageCount } = useSelector(state => {
    return {
      memberCount: state.stats.memberCount,
      messageCount: state.stats.messageCount
    };
  });

  useEffect(() => {
    dispatch(getGuildStats(guildId));
  }, [guildId]);

  return (
    <Container className="statistics-container" fluid>
      <h2>Statistics</h2>
      <Counter value={memberCount} title={"Members"} />
      <Counter value={messageCount} title={"Messages"} />
      <Histogram />
    </Container>
  );
}

export default Statistics;

Statistics.propTypes = {
  guildId: PropTypes.string
};
