import FavoriteItem from "../../components/favoriteItem/favoriteItem";
import styles from "./favorites.module.css";

const Favorites = () => {
  return (
    <div className={styles["favorites-list"]}>
      <FavoriteItem />
      <FavoriteItem />
    </div>
  );
};

export default Favorites;
