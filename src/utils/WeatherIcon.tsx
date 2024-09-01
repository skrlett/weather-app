import {
  AcUnitOutlined,
  AirOutlined,
  GrainOutlined,
  StormOutlined,
  ThunderstormOutlined,
  WbCloudyOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
const WeatherIcon = ({ weatherType }: { weatherType: string }) => {
  let weatherIcon;

  switch (weatherType) {
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

  return weatherIcon;
};

export default WeatherIcon;
