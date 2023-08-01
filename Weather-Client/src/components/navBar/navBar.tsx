import styles from "./navBar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NAVBAR_OPTIONS } from "../../utils/constants/navBarConstants";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/actions/pageAction";
import { RootState } from "../../store";

const NavBar = () => {
  // const [chosenPage, setChosenPage] = useState<NAVBAR_OPTIONS>(
  //   NAVBAR_OPTIONS.HOME
  // );
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.page.page);

  const handlePagesChange = (newChosenPage: NAVBAR_OPTIONS) => {
    dispatch<any>(setPage(newChosenPage));
  };

  return (
    <div className={styles["nav-bar"]}>
      <div
        onClick={() => handlePagesChange(NAVBAR_OPTIONS.HOME)}
        className={`${styles["nav-bar_option"]} ${
          styles[
            `nav-bar_option-home${
              page === NAVBAR_OPTIONS.HOME ? "-chosen" : ""
            }`
          ]
        }`}
      >
        <HomeOutlinedIcon sx={{ fontSize: 40 }} />
      </div>
      <div
        onClick={() => handlePagesChange(NAVBAR_OPTIONS.FAVORITES)}
        className={`${styles["nav-bar_option"]} ${
          styles[
            `nav-bar_option-favorites${
              page === NAVBAR_OPTIONS.FAVORITES ? "-chosen" : ""
            }`
          ]
        }`}
      >
        <FavoriteBorderOutlinedIcon sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
};

export default NavBar;
