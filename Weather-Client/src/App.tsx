import Weather from "./pages/weather/weather";
import Favorites from "./pages/favorites/favorites";
import NavBar from "./components/navBar/navBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles["mode-button-sun"]}></div>
      <Weather />
      {/* <Favorites /> */}
      <NavBar />
    </div>
  );
}

export default App;
