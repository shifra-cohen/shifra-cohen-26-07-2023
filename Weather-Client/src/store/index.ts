import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";
import favoritesReducer from "./reducers/favoritesReducers";
import pageReducer from "./reducers/pageReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
  favorites: favoritesReducer,
  page: pageReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
