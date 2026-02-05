import WatchList from "../components/WatchList.jsx";
import * as actions from "./ActionTypes.js";
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList], //drt ...state.watchList bach nakhdo les elements dyal array qdima ila madrthach ghatwli array wst array
      };
  }
};

export default reducer;
