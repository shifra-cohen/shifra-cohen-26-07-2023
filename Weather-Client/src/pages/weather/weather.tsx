import styles from "./weather.module.css";
import SearchField from "../../components/searchField/searchField";
import WeatherDisplay from "../../components/weatherDisplay/weatherDisplay";
import { useEffect, useState } from "react";
import ForeCast from "../../components/foreCast/foreCast";
import { getWeather } from "../../store/actions/weatherActions";
import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "../../store/actions/favoritesActions";
import { searchedValue } from "../../store/types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface IWeatherProps {
  searchedValue?: searchedValue;
}

const Weather = ({
  searchedValue = { key: "215854", label: "Tel Aviv IL" },
}: IWeatherProps) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState<searchedValue>(searchedValue);

  const handleSearch = (searchValue: searchedValue) => {
    setInput(searchValue);
  };

  const weatherData = useSelector((state: RootState) => state.weather.data);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesWeatherItems
  );

  const toggleFavorite = () => {
    if (weatherData) {
      if (
        favorites.find(
          (item) => item.searchedValue.key === weatherData.searchedValue.key
        )
      ) {
        dispatch<any>(removeItemFromFavorites(weatherData.searchedValue.key));
      } else {
        dispatch<any>(addItemToFavorites({ ...weatherData }));
      }
    }
  };

  useEffect(() => {
    dispatch<any>(getWeather(input));
  }, [input, dispatch]);

  return (
    <div className={styles["weather-page"]}>
      <SearchField onSearch={handleSearch} />
      {weatherData && (
        <>
          <WeatherDisplay
            currentWatherData={weatherData.current}
            locationData={weatherData.searchedValue}
            toggleFavorite={toggleFavorite}
            isFavorite={
              !!favorites.find(
                (item) =>
                  item.searchedValue.key === weatherData.searchedValue.key
              )
            }
          />
          <ForeCast foreCastData={weatherData.foreCast} />
        </>
      )}
      {/* <NavBar /> */}
    </div>
  );
};

export default Weather;
