import React from "react";
import ErrorHandler from "../components/ErrorHandler";
import { geoLocApiKey } from "./api";

interface CityData {
  city: string;
  countryCode: string;
  regionCode: string;
  latitude: number;
  longitude: number;
}

const useCities = () => {
  const [cities, setCities] = React.useState([]);
  const [response, setResponse] = React.useState<CityData[] | null>(null);
  const { error, handleError } = ErrorHandler();

  const loadCities = async (inputSearchValue: string) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputSearchValue}&limit=10`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": geoLocApiKey,
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (result === null) throw "Invalid API";

      const cities = result.data;
      setResponse(cities);
      setCities(
        cities.map(
          (ob: any) => `${ob.city}, ${ob.regionCode}, ${ob.countryCode}`
        )
      );
    } catch (error) {
      handleError(error);
    }
  };

  return { cities, response, error, loadCities };
};

export default useCities;
