import { WeatherAction, GET_WEATHER, SET_ERROR, WeatherState } from "../types";

const initialState: WeatherState = {
  data: null,
  error: "",
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
