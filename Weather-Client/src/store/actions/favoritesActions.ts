import {
  FAVORITE_ADD_ITEM_SUCCESS,
  FAVORITE_REMOVE_ITEM_SUCCESS,
} from "../types";

export const addItemToFavoritesSuccess = (favoriteCityName: string) => ({
  type: FAVORITE_ADD_ITEM_SUCCESS,
  payload: favoriteCityName,
});

export const removeItemFromFavoritesSuccess = (favoriteCityName: string) => ({
  type: FAVORITE_REMOVE_ITEM_SUCCESS,
  payload: favoriteCityName,
});
