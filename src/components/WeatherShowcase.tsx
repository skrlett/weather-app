import { Grid } from "@mui/material";
import CurrentWeather from "./CurrentWeather";
import WeatherIcon from "../utils/WeatherIcon";
import { WeatherData } from "../utils/api";

interface weatherShowcaseProps {
  weatherData: WeatherData;
  city: string;
}

const WeatherShowcase: React.FC<weatherShowcaseProps> = ({
  weatherData,
  city,
}) => {
  return (
    <Grid item xs={12}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <WeatherIcon weatherType={weatherData.weather[0].main} />
        <CurrentWeather weatherData={weatherData} city={city} />
      </div>
    </Grid>
  );
};

export default WeatherShowcase;
