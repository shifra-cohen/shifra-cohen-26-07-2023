import {
  FAVORITE_ADD_ITEM_SUCCESS,
  FAVORITE_REMOVE_ITEM_SUCCESS,
  FavoriteAction,
  FavoriteWather,
} from "../types";

interface State {
  data: FavoriteWather[];
}

const initialState: State = {
  data: [] as FavoriteWather[],
};

const favoritesReducer = (state = initialState, action: FavoriteAction) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ADD_ITEM_SUCCESS:
      return {
        ...state,
        favoritesWeatherItems: [...state.data, payload],
      };
    case FAVORITE_REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        favoritesWeatherItems: state.data.filter(
          (item: FavoriteWather) => item.cityName !== payload.cityName
        ),
        favoritesItemsWeather: state.data.filter(
          (item: FavoriteWather) => item.cityName !== payload.cityName
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
