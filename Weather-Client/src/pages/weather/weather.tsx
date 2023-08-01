import styles from "./weather.module.css";
import SearchField from "../../components/searchField/searchField";
import WeatherDisplay from "../../components/weatherDisplay/weatherDisplay";
import { useEffect, useState } from "react";
import ForeCast from "../../components/foreCast/foreCast";
import { getWeather } from "../../store/actions/weatherActions";
import { searchedValue } from "../../store/types";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Weather = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<searchedValue>({
    key: "215854",
    label: "Tel Aviv IL",
  });

  const handleSearch = (searchValue: searchedValue) => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    dispatch<any>(getWeather(searchValue));
  }, [searchValue, dispatch]);

  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <div className={styles["weather-page"]}>
      <SearchField onSearch={handleSearch} />
      {weatherData && (
        <>
          <WeatherDisplay
            currentWatherData={weatherData.current}
            locationData={weatherData.searchedValue}
          />
          <ForeCast foreCastData={weatherData.foreCast} />
        </>
      )}
    </div>
  );
};

export default Weather;
