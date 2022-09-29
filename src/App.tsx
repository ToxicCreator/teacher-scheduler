import {Outlet} from "react-router-dom";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import MainLayout from "layouts/MainLayout";


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
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
