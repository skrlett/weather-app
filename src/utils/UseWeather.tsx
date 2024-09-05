import { useState } from "react";
import { openWeatherApiKey, WeatherData } from "../utils/api";

const TTL = 60 * 60 * 1000; // Cache time: 1 hour

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [LatLang, setLatLang] = useState<string>("0 0");

  const getLatLang = async (latlang: string) => {
    const [lat, lon, city] = latlang.split("#");
    setLatLang(`${lat} ${lon}`);
    setInitialLoading(false);

    try {
      const cacheFetchKey = `weatherData_${lat}_${lon}`;
      const cachedData = localStorage.getItem(cacheFetchKey);

      if (cachedData) {
        const data = JSON.parse(cachedData);
        const cacheTime = Date.now() - data.timestamp;
        if (cacheTime < TTL) {
          setWeatherData(data.data);
          setLoading(false);
          setCity(city);
          return;
        } else {
          localStorage.removeItem(cacheFetchKey);
        }
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
      );

      const resJSON = await response.json();

      if (!resJSON) {
        throw new Error("Invalid API Response");
      }

      const storeJSON = {
        data: resJSON,
        timestamp: Date.now(),
      };

      localStorage.setItem(
        `weatherData_${lat}_${lon}`,
        JSON.stringify(storeJSON)
      );
      setWeatherData(resJSON);
      setLoading(false);
      setCity(city);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred");
    }
  };

  const handleThemeChange = (mode: boolean) => {
    setDarkMode(mode);
  };

  return {
    weatherData,
    city,
    loading,
    initialLoading,
    error,
    getLatLang,
    handleThemeChange,
    darkMode,
    LatLang,
  };
};

export default useWeather;
