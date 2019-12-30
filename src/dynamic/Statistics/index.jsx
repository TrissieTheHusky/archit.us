import Counter from "components/Counter";
import Histogram from "components/Histogram";
import Card from "components/Card";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGuildStats } from "store/actions";
import "./style.scss";

function Statistics({ guildId }) {
  const dispatch = useDispatch();

  const { memberCount, messageCount, channelCount } = useSelector(state => {
    const { memberCount, messageCount, channelCount } = state.stats;
    return {
      memberCount,
      messageCount,
      channelCount
    };
  });

  useEffect(() => {
    dispatch(getGuildStats(guildId));
  }, [guildId]);

  const CardHeader = <h3 className="card-header">At A Glance</h3>;

  return (
    <Container className="statistics-container" fluid>
      <h2>Statistics</h2>
      <Card header={CardHeader}>
        <div className="counters">
          <Counter value={memberCount} title={"Members"} />
          <Counter value={messageCount} title={"Messages"} />
          <Counter value={channelCount} title={"Channels"} />
        </div>
      </Card>
      <Histogram />
    </Container>
  );
}

export default Statistics;

Statistics.propTypes = {
  guildId: PropTypes.string
};
