import { Card, CardContent, Typography, SvgIcon, Stack } from "@mui/material";
import WeatherIcon from "../utils/WeatherIcon";

const WeatherCard = ({ weatherType, high, low, pressure, humidity, date }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {date}
        </Typography>
        {/* <SvgIcon component={WbSunnyOutlined} sx={{ fontSize: "12rem" }} /> */}
        <WeatherIcon weatherType={weatherType} />
        <Typography gutterBottom variant="h5" component="div">
          {weatherType}
        </Typography>
        <Stack direction={"row"} sx={{ justifyContent: "space-evenly" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            High: {high}°F
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Low: {low}°F
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Pressure: {pressure}°F
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Humidity: {humidity}°F
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
