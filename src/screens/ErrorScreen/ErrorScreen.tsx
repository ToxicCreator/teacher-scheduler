import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "mainConstants";
import Screen from "../Screen";
import styles from "./ErrorScreen.module.css";


function ErrorScreen() {
  return (
    <Screen>
      <div className={styles.root}>
        <h1>Страница не найдена</h1>
        <Link 
          className={styles.link}
          to={ROUTE_PATHS.DAY}
        >
          На главную
        </Link>
      </div>
    </Screen>
  );
}

export default ErrorScreen;
