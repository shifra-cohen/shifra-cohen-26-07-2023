import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
  FavoriteAction,
  CurrentAndForeCast,
} from "../types";

interface State {
  favoritesWeatherItems: CurrentAndForeCast[];
}

const initialState: State = {
  favoritesWeatherItems: [] as CurrentAndForeCast[],
};

const favoritesReducer = (state = initialState, action: FavoriteAction) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ADD_ITEM:
      return {
        favoritesWeatherItems: [...state.favoritesWeatherItems, payload],
      };
    case FAVORITE_REMOVE_ITEM:
      return {
        favoritesWeatherItems: state.favoritesWeatherItems.filter(
          (item) => item.searchedValue.key !== payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
