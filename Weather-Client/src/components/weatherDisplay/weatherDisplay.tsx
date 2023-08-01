import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./weatherDisplay.module.css";
import { WeatherData, searchedValue } from "../../store/types";

interface IWeatherDisplayProps {
  currentWatherData: WeatherData;
  locationData: searchedValue;
}

const WeatherDisplay = ({
  currentWatherData,
  locationData,
}: IWeatherDisplayProps) => {
  return (
    <div className={styles["display-container"]}>
      <div className={styles["display-left"]}>
        <span className={styles["display-day"]}>Today</span>
        <span className={styles["display-date"]}>
          {new Date(
            currentWatherData.LocalObservationDateTime
          ).toLocaleDateString("en-GB")}
        </span>
        <span className={styles["display-location"]}>
          <LocationOnOutlinedIcon />
          {locationData.label}
        </span>
        <img
          className={styles["display-icon"]}
          alt="weather icon"
          src={`https://developer.accuweather.com/sites/default/files/${(
            "0" + currentWatherData.WeatherIcon
          ).slice(-2)}-s.png`}
        />
      </div>
      <div className={styles["display-right"]}>
        <FavoriteBorderOutlinedIcon className={styles["favorite-btn"]} />
        <>
          <span className={styles["display-degrees"]}>
            {Math.round(currentWatherData.Temperature.Metric.Value)}
            <span className={styles["display-degrees-celsius"]}>°C</span>
          </span>
        </>
        <span className={styles["display-desc"]}>
          {currentWatherData.WeatherText}
        </span>
      </div>
    </div>
  );
};

export default WeatherDisplay;
