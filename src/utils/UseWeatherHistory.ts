import React from "react";
import { openWeatherApiKey } from "./api";

const UseWeatherHistory = () => {
  const [weatherHistory, setWeatherHistory] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getWeatherHistory = async (latlang: string) => {
    const [lat, lon] = latlang.split(" ");

    setLoading(true);

    try {
      const history = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
      );

      const historyJSON = await history.json();
      setWeatherHistory(historyJSON);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return { weatherHistory, loading, getWeatherHistory };
};

export default UseWeatherHistory;
