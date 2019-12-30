import { LOAD_GUILD_STATS } from "store/actions";

export const initial = {
  messageCount: 0,
  memberCount: 0,
  channelCount: 0,
  channels: {},
  members: {},
  times: {}
};

export function reducer(state = initial, action) {
  switch (action.type) {
    case LOAD_GUILD_STATS:
      const {
        memberCount,
        messageCount,
        channelCount,
        channels,
        members,
        times
      } = action.payload;
      return {
        messageCount,
        memberCount,
        channelCount,
        channels,
        members,
        times
      };
    default:
      return state;
  }
}
