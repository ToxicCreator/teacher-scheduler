import Header from 'components/header/Header';
import DayScreen from 'screens/DayScreen';
import NavigationBar from 'components/navigation-bar/NavigationBar';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 610,
      lg: 1024,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header teacherName={"Русаков А.М."} />
        <DayScreen />
        <NavigationBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
