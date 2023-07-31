import styles from "./weather.module.css";
import SearchField, {
  searchedValue,
} from "../../components/searchField/searchField";
import WeatherDisplay from "../../components/weatherDisplay/weatherDisplay";
import { currentConditionsUrl, forecastUrl } from "../../accuWeatherApi/config";
import { useEffect, useState } from "react";
import { currentWeather, forCast } from "../../accuWeatherApi/types";
import ForCast from "../../components/forCast/forCast";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState<currentWeather | null>(
    null
  );
  const [forecastValue, setForecastValue] = useState<forCast | null>(null);
  const [searchValue, setSearchValue] = useState<searchedValue>({
    key: "215854",
    label: "Tel Aviv IL",
  });

  const handleSearch = (searchValue: searchedValue) => {
    setSearchValue(searchValue);
  };

  useEffect(() => {
    const getWeather = () => {
      const currentWeatherFetch = fetch(currentConditionsUrl(searchValue.key));
      const forecastFetch = fetch(forecastUrl(searchValue.key, true));

      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();

          setCurrentWeather({ ...weatherResponse[0] });
          setForecastValue({ ...forcastResponse });
        })
        .catch(console.log);
    };

    getWeather();
  }, [searchValue]);

  return (
    <div className={styles["weather-page"]}>
      <SearchField onSearch={handleSearch} />
      {currentWeather && (
        <WeatherDisplay
          currentWatherData={currentWeather}
          locationName={searchValue.label}
        />
      )}
      {forecastValue && <ForCast forCastData={forecastValue} />}
    </div>
  );
};

export default Weather;
