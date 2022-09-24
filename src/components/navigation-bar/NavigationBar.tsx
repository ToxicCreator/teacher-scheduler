import {useState} from 'react';
import Paper from '@mui/material/Paper';
import ExploreIcon from '@mui/icons-material/Explore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import BottomNavigation from '@mui/material/BottomNavigation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


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
        <BottomNavigationAction label="День" icon={<TableRowsIcon />} />
        <BottomNavigationAction label="Неделя" icon={<CalendarMonthIcon />} />
        <BottomNavigationAction label="Свободные ауд." icon={<ExploreIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default NavigationBar;
