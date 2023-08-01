import FavoriteItem from "../../components/favoriteItem/favoriteItem";
import styles from "./favorites.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { searchedValue } from "../../store/types";

interface IFavoriteProps {
  onClick: (chosenLocation: searchedValue) => void;
}

const Favorites = ({ onClick }: IFavoriteProps) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesWeatherItems
  );

  return (
    <div className={styles["favorites-list"]}>
      {favorites &&
        favorites.map((city) => (
          <FavoriteItem
            cityDetailes={city}
            key={city.searchedValue.key}
            onClick={onClick}
          />
        ))}
    </div>
  );
};

export default Favorites;
