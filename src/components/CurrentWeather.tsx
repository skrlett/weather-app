import { Stack, Typography } from "@mui/material";

const CurrentWeather = ({ weatherData, city }) => {
  let [cityName, region]: string = city.split(", ");

  const k2f = (K: number) => Math.round((K - 273.15) * 1.8 + 32);

  return (
    <div style={{ width: "25%" }}>
      <Stack alignItems={"center"}>
        <Typography style={{ fontSize: "2rem" }} height={30}>
          {/* {`${cityName}, ${region}`} */}
          {`${cityName}`}
        </Typography>
        <Typography style={{ fontSize: "4rem" }} height={70}>
          {`${k2f(weatherData.main.temp)}°F`}
        </Typography>
        <Typography
          style={{ fontSize: "1rem" }}
        >{`${weatherData.weather[0].main}`}</Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "70%",
          }}
        >
          <Typography>{`H:${k2f(weatherData.main.temp_min)}°`}</Typography>
          <Typography>{`L:${k2f(weatherData.main.temp_max)}°`}</Typography>
        </div>
      </Stack>
    </div>
  );
};

export default CurrentWeather;
