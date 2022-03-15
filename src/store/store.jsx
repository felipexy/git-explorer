import { createStore } from "redux";
import { combineReducers } from "redux";

const INITIAL_STATE = { search: [] };

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CURRENT_SEARCH":
      state.search.push(action.package);
      return state.search[0];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer);

export default store;
