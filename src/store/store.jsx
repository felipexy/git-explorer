import { createStore } from "redux";
import { combineReducers } from "redux";

const INITIAL_STATE = [];
const INITIAL_STATE_FAVORITES = [];

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CURRENT_SEARCH":
      state = [];
      state.push(action.package);
      return state[0];
    default:
      return state;
  }
}
let alreadyExists;

const checkFavoritesArray = (favoritesArray, payload) => {
  alreadyExists = false;
  favoritesArray.map((repo) => {
    if (repo.id === payload.id) {
      alreadyExists = true;
    }
  });
};

function favoritesReducer(state = INITIAL_STATE_FAVORITES, action) {
  switch (action.type) {
    case "CURRENT_FAVORITES":
      checkFavoritesArray(state, action.package);
      if (!alreadyExists) {
        state.push(action.package);
        localStorage.setItem("favorites", JSON.stringify(state));
      } else {
        state.map((repo) => {
          if (repo.id === action.package.id) {
            state.splice(state.indexOf(repo), 1);
            localStorage.setItem("favorites", JSON.stringify(state));
          }
        });
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
