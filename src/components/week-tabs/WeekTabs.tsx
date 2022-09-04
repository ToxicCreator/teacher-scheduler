import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {WEEK_DAY_TABS} from './constants';


const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: '40px'
        }
      },
    },
  },
});

export default function WeekTabs() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [value, setValue] = React.useState(() => {
    const now = new Date();
    const weekDayIndex = now.getDay() - 1;
    const weekDay = WEEK_DAY_TABS[weekDayIndex]
    || WEEK_DAY_TABS[0];
    return weekDay.value;
  });

  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
      >
          {WEEK_DAY_TABS.map((item) => {
            const {value, label, longLabel} = item;
            return (
              <Tab
                key={value}
                value={value}
                label={isMobile ? label : longLabel}
              />
            );
          })}
      </Tabs>
    </ThemeProvider>
  );
}
