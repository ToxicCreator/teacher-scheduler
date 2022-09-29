import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DayScreen from "screens/DayScreen/DayScreen";
import ErrorScreen from "screens/ErrorScreen/ErrorScreen";
import App from "./App";
import {ROUTE_PATHS} from "./mainConstants";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTE_PATHS.DAY} element={<DayScreen />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
