import * as actions from "./ActionTypes.js";
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList], //drt ...state.watchList bach nakhdo les elements dyal array qdima ila madrthach ghatwli array wst array
      };
    //dima kandir l copy fl object onzid dakhl l curly braces bach nrad object , of l array dakhl larray
    case actions.REMOVE_FROM_WATCH_LIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload,
        ),
      };

    case actions.MOVE_TO_WATCH_LIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
        watched: state.watched.filter((movie) => {
          movie.imdbID !== action.payload.imdbID;
        }),
      };

    case actions.ADD_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID,
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload,
        ),
      };
  }
};

export default reducer;
