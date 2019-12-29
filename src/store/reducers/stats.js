import { LOAD_GUILD_STATS } from "store/actions";

export const initial = {
  messageCount: 0,
  memberCount: 0
};

export function reducer(state = initial, action) {
  switch (action.type) {
    case LOAD_GUILD_STATS:
      const { memberCount, messageCount } = action.payload;
      return {
        messageCount,
        memberCount
      };
    default:
      return state;
  }
}
