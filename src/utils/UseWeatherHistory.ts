import React from "react";
import { openWeatherApiKey, ListItem, WeatherHistoryData } from "../utils/api";

const UseWeatherHistory = ({ latlang }: { latlang: string }) => {
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

  return { weatherHistory, loading };
};

export default UseWeatherHistory;
