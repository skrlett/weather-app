import { Grid } from "@mui/material";
import CurrentWeather from "./CurrentWeather";
import {
  AcUnitOutlined,
  AirOutlined,
  GrainOutlined,
  StormOutlined,
  ThunderstormOutlined,
  WbCloudyOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

const WeatherShowcase = ({ weatherData, city }) => {
  let weatherIcon;

  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherIcon = (
        <WbCloudyOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Rain":
    case "Drizzle":
      weatherIcon = (
        <GrainOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Snow":
      weatherIcon = (
        <AcUnitOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Atmosphere":
      weatherIcon = (
        <AirOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Extreme":
      weatherIcon = (
        <StormOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Thunderstorm":
      weatherIcon = (
        <ThunderstormOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    case "Extreme":
      weatherIcon = (
        <StormOutlined style={{ fontSize: "12rem", color: "gray" }} />
      );
      break;

    default:
      weatherIcon = (
        <WbSunnyOutlined style={{ fontSize: "12rem", color: "orange" }} />
      );
  }

  return (
    <Grid item xs={12}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* <WbSunnyOutlined style={{ fontSize: "12rem", color: "orange" }} /> */}
        {weatherIcon}
        <CurrentWeather weatherData={weatherData} city={city} />
      </div>
    </Grid>
  );
};

export default WeatherShowcase;
