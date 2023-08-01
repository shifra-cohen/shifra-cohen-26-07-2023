import styles from "./favoriteItem.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const FavoriteItem = () => {
  return (
    <div className={styles["favorite-item-container"]}>
      <FavoriteBorderOutlinedIcon
        className={styles["favorite-item-favorite-icon"]}
      />
      <div className={styles["favorite-item-location"]}>Paris, FR</div>
      <img
        className={styles["favorite-item-icon"]}
        alt="weather icon"
        src={`https://developer.accuweather.com/sites/default/files/02-s.png`}
      />
      <div className={styles["favorite-item-degrees"]}>38°C</div>
      <div className={styles["favorite-item-desc"]}>sunny</div>
    </div>
  );
};

export default FavoriteItem;
