import { Grid } from "@mui/material";
import WeatherCard from "./WeatherCard";
import React from "react";
import { ListItem, openWeatherApiKey, WeatherHistoryData } from "../utils/api";
import LoadingScreen from "../utils/LoadingScreen";
import { dateToWeekday, k2f } from "../utils/utils";

const WeatherHistoy = ({ latlang }: { latlang: string }) => {
  const [weatherHistory, setWeatherHistory] = React.useState<ListItem[] | null>(
    null
  );
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const getWeatherHistory = async (latlang: string) => {
      const [lat, lon] = latlang.split(" ");

      setLoading(true);

      try {
        const history = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
        );

        const historyJSON: WeatherHistoryData = await history.json();

        console.log(historyJSON)

        // process weather data
        const uniqueDates = new Set();
        let historyData: ListItem[] = [];

        historyJSON.list.map((obj: ListItem) => {
          const date = obj.dt_txt.split(" ")[0];

          if (!uniqueDates.has(date)) {
            uniqueDates.add(date);
            historyData.push(obj);
          }
        });

        setWeatherHistory(historyData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    getWeatherHistory(latlang);
  }, [latlang]);

  // let's add weather card component
  let weatherCards: any = [];
  if (weatherHistory) {
    weatherCards = weatherHistory.map((obj: ListItem) => (
      <Grid item sm={6} md={4} lg={3} key={Math.random()}>
        <WeatherCard
          high={k2f(obj.main.temp_max)}
          low={k2f(obj.main.temp_min)}
          humidity={obj.main.humidity}
          pressure={obj.main.pressure}
          weatherType={obj.weather[0].main}
          date={dateToWeekday(obj.dt_txt.split(" ")[0])}
        />
      </Grid>
    ));
  }

  return (
    <Grid
      spacing={2}
      marginTop={2}
      container
      direction={"row"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <LoadingScreen /> : weatherCards.map((obj: any) => obj)}
    </Grid>
  );
};

export default WeatherHistoy;
