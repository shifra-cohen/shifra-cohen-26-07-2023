import Weather from "./pages/weather/weather";
import Favorites from "./pages/favorites/favorites";
import NavBar from "./components/navBar/navBar";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import Modal from "@mui/material/Modal/Modal";
import { NAVBAR_OPTIONS, searchedValue } from "./store/types";
import { setPage } from "./store/actions/pageAction";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();

  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const page = useSelector((state: RootState) => state.page.page);

  const [chosenLocation, setChosenLocation] = useState<
    searchedValue | undefined
  >(undefined);

  const favoriteLocationClicked = (chosenLocation: searchedValue) => {
    setChosenLocation(chosenLocation);
    dispatch<any>(setPage(NAVBAR_OPTIONS.HOME));
  };

  useEffect(() => {
    setChosenLocation(undefined);
  }, [page]);

  return (
    <div className={styles.app}>
      <div className={styles["mode-button-sun"]}></div>
      {page === NAVBAR_OPTIONS.HOME ? (
        <Weather searchedValue={chosenLocation} />
      ) : (
        <Favorites onClick={favoriteLocationClicked} />
      )}
      <NavBar />
      <Modal
        open={!!error}
        onClose={() => dispatch<any>(setError())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>{error}</div>
      </Modal>
      <Modal
        open={!!alertMsg}
        onClose={() => dispatch<any>(setAlert(""))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>{alertMsg}</div>
      </Modal>
    </div>
  );
}

export default App;
