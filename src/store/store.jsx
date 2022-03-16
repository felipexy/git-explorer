import { createStore } from "redux";
import { combineReducers } from "redux";

const INITIAL_STATE = [];
const INITIAL_STATE_FAVORITES = [];

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CURRENT_SEARCH":
      state.push(action.package);
      return state[0];
    default:
      return state;
  }
}

function favoritesReducer(state = INITIAL_STATE_FAVORITES, action) {
  switch (action.type) {
    case "CURRENT_FAVORITES":
      if(!state.includes(action.package)){
        state.push(action.package);
      } else {
        const deleteFavorite = state.filter(favoriteItem => favoriteItem !== action.package)
        state = deleteFavorite;
      }
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;
