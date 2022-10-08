import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ExploreIcon from '@mui/icons-material/Explore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import BottomNavigation from '@mui/material/BottomNavigation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {ROUTE_PATHS} from "mainConstants";
import { getNavigationKeyByPage } from './utils';


let rerenders = 0;

function NavigationBar() {
  const {pathname} = useLocation();
  console.log(`Rerenders count: ${rerenders}`);
  const navigationKey = getNavigationKeyByPage(pathname);
  const [currentScreen, setCurrentScreen] = useState(navigationKey);
  return (
    <Paper sx={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentScreen}
        onChange={(event, newValue) => {
          console.log(newValue);
          setCurrentScreen(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to={ROUTE_PATHS.DAY}
          label="День"
          icon={<TableRowsIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTE_PATHS.WEEK}
          label="Неделя"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTE_PATHS.AUDIENCE}
          label="Поиск ауд."
          icon={<ExploreIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default NavigationBar;
