import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_ERROR,
  foreCast,
  searchedValue,
} from "../types";
import { currentConditionsUrl, foreCastUrl } from "../../accuWeatherApi/config";

export const getWeather = (
  searchedValue: searchedValue
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const currentConditionRes = await fetch(
        currentConditionsUrl(searchedValue.key)
      );
      const foreCastRes = await fetch(foreCastUrl(searchedValue.key, true));

      if (!currentConditionRes.ok) {
        const resData: WeatherError = await currentConditionRes.json();
        throw new Error(resData.message);
      }

      if (!foreCastRes.ok) {
        const resData: WeatherError = await foreCastRes.json();
        throw new Error(resData.message);
      }

      const current: WeatherData[] = await currentConditionRes.json();
      const foreCast: foreCast = await foreCastRes.json();

      dispatch({
        type: GET_WEATHER,
        payload: { searchedValue, current: current[0], foreCast },
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
