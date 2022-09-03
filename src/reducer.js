export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "",
  // token:
  //   "BQAzC6V_EhTD8T_FxwwsaPCqobI9IW12cw3olfL4zqOfO36y5d59si9HbJO1kZOM27WEfpBsLV0UG-naf317imJRGPekZfngUan8GaRgEs0U93wlw4h0Iz7v8_r2V8ZXGo6Pv-e7-Cp3roWnAqhdBSL6M2JX-FAqrItM35bg-msZNEp8k8a8cPGfRTGVlQHvZCs",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
