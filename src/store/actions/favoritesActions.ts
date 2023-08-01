import {
  CurrentAndForeCast,
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from "../types";

export const addItemToFavorites = (favoriteCityData: CurrentAndForeCast) => ({
  type: FAVORITE_ADD_ITEM,
  payload: favoriteCityData,
});

export const removeItemFromFavorites = (favoriteCityKey: string) => ({
  type: FAVORITE_REMOVE_ITEM,
  payload: favoriteCityKey,
});
