import { createSelector } from "reselect";
import { LOAD_GUILDS } from "../actions";
import { sessionAware } from "./session";

export const initial = {
  guildList: [],
  hasLoaded: false
};

export const reducer = sessionAware(initial, (state, action) => {
  switch (action.type) {
    case LOAD_GUILDS:
      const { guildList } = action.payload;
      return {
        ...state,
        guildList,
        hasLoaded: true
      };

    default:
      return state;
  }
});

const getGuildList = state => state.guilds.guildList;

export const getAutbotGuilds = createSelector(
  [getGuildList],
  guildList => guildList.filter(guild => guild.has_autbot)
);

const MANAGE_SERVERS = 32; // 0x20
export const getDiscordAdminGuildsWithoutAutbot = createSelector(
  [getGuildList],
  guildList =>
    guildList.filter(
      guild => guild.permissions & MANAGE_SERVERS && !guild.has_autbot
    )
);
