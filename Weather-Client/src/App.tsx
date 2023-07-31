import Weather from "./pages/weather/weather";
import NavBar from "./components/navBar/navBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Weather />
      <NavBar />
    </div>
  );
}

export default App;
