import {useState} from 'react';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ExploreIcon from '@mui/icons-material/Explore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import BottomNavigation from '@mui/material/BottomNavigation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {ROUTE_PATHS} from "mainConstants";


function NavigationBar() {
  const [currentScreen, setCurrentScreen] = useState(0);
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
