import { CurrentAndForeCast, searchedValue } from "../../store/types";
import styles from "./favoriteItem.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IFavoriteItemProps {
  cityDetailes: CurrentAndForeCast;
  onClick: (chosenLocation: searchedValue) => void;
}

const FavoriteItem = ({ cityDetailes, onClick }: IFavoriteItemProps) => {
  return (
    <div
      className={styles["favorite-item-container"]}
      onClick={() => onClick(cityDetailes.searchedValue)}
    >
      <FavoriteIcon className={styles["favorite-item-favorite-icon"]} />
      <div className={styles["favorite-item-location"]}>
        {cityDetailes.searchedValue.label}
      </div>
      <img
        className={styles["favorite-item-icon"]}
        alt="weather icon"
        src={`https://developer.accuweather.com/sites/default/files/${(
          "0" + cityDetailes.current.WeatherIcon
        ).slice(-2)}-s.png`}
      />
      <div className={styles["favorite-item-degrees"]}>
        {Math.round(cityDetailes.current.Temperature.Metric.Value)}°C
      </div>
      <div className={styles["favorite-item-desc"]}>
        {cityDetailes.current.WeatherText}
      </div>
    </div>
  );
};

export default FavoriteItem;
