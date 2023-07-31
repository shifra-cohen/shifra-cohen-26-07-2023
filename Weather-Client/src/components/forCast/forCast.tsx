import { forCast, dailyForCast } from "../../accuWeatherApi/types";
import { getWeekDay } from "../../utils/helper/getWeekDay";
import styles from "./forCast.module.css";

interface IForCastProps {
  forCastData: forCast;
}

const ForCast = ({ forCastData }: IForCastProps) => {
  return (
    <div className={styles["for-cast-container"]}>
      {forCastData.DailyForecasts.map((forCast: dailyForCast) => (
        <div className={styles["for-cast-item"]} key={forCast.EpochDate}>
          {getWeekDay(new Date(forCast.Date)).slice(0, 3)}
          <img
            className={styles["display-icon"]}
            alt="weather icon"
            src={`https://developer.accuweather.com/sites/default/files/${(
              "0" + forCast.Day.Icon
            ).slice(-2)}-s.png`}
          />
          {Math.round(forCast.Temperature.Maximum.Value)}°C
        </div>
      ))}
    </div>
  );
};

export default ForCast;
