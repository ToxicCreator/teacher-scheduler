import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DayScreen from "screens/DayScreen/DayScreen";
import WeekScreen from "screens/WeekScreen/WeekScreen";
import ErrorScreen from "screens/ErrorScreen/ErrorScreen";
import App from "./App";
import {ROUTE_PATHS} from "./mainConstants";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ROUTE_PATHS.DAY} element={<DayScreen />} />
          {/* <Route path={`${ROUTE_PATHS.DAY}/:currentDay`} element={<DayScreen />} /> */}
          <Route path={ROUTE_PATHS.WEEK} element={<WeekScreen />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
