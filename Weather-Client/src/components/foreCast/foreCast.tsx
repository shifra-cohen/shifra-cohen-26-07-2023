import { foreCast, dailyForeCast } from "../../store/types";
import { getWeekDay } from "../../utils/helper/getWeekDay";
import styles from "./foreCast.module.css";

interface IForeCastProps {
  foreCastData: foreCast;
}

const ForeCast = ({ foreCastData }: IForeCastProps) => {
  return (
    <div className={styles["forecast-container"]}>
      {foreCastData.DailyForecasts.map((foreCast: dailyForeCast) => (
        <div className={styles["forecast-item"]} key={foreCast.EpochDate}>
          {getWeekDay(new Date(foreCast.Date)).slice(0, 3)}
          <img
            className={styles["display-icon"]}
            alt="weather icon"
            src={`https://developer.accuweather.com/sites/default/files/${(
              "0" + foreCast.Day.Icon
            ).slice(-2)}-s.png`}
          />
          {Math.round(foreCast.Temperature.Maximum.Value)}°C
        </div>
      ))}
    </div>
  );
};

export default ForeCast;
