import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Search from "../components/Search";
import ClearCache from "../utils/ClearCache";
import DarkModeToggle from "../utils/DarkModeToggle";
import InitialScreen from "../utils/InitialScreen";
import LoadingScreen from "../utils/LoadingScreen";
import useWeather from "../utils/UseWeather";
import ErrorPage from "./ErrorPage";
import WeatherShowcase from "./WeatherShowcase";
import WeatherHistoy from "./WeatherHistoy";

const HomePage = () => {
  const {
    darkMode,
    handleThemeChange,
    weatherData,
    city,
    initialLoading,
    loading,
    error,
    getLatLang,
    LatLang,
  } = useWeather();

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={5}>
        <Grid item xs={1}>
          <ClearCache />
        </Grid>
        <Grid item xs={10}>
          <Search getLatLang={getLatLang} />
        </Grid>
        <Grid item xs={1}>
          <DarkModeToggle themeChange={handleThemeChange} mode={darkMode} />
        </Grid>
        {initialLoading ? (
          <InitialScreen />
        ) : loading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          <>
            <WeatherShowcase weatherData={weatherData} city={city} />
            <WeatherHistoy latlang={LatLang}/>
          </>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
