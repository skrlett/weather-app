import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { geoLocApiKey } from "../utils/api";
import ErrorPage from "./ErrorPage";
import ErrorHandler from "./ErrorHandler";

interface CityData {
  city: string;
  countryCode: string;
  regionCode: string;
  latitude: number;
  longitude: number;
}

export default function Search({
  getLatLang,
}: {
  getLatLang: CallableFunction;
}) {
  const [value, setValue] = React.useState(null);
  const [inputSearchValue, setInputSearchValue] = React.useState("");
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

  const handleInputOnChange = (_event: any, searchCity: string) => {
    setInputSearchValue(searchCity);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      loadCities(inputSearchValue);
    }
  };

  const handleSelectedCity = (_event: any, newValue: any | string) => {
    if (newValue === null) return;

    setValue(newValue);

    let city: string = newValue.split(", ")[0];
    let regionCode: string = newValue.split(", ")[1];
    let countryCode: string = newValue.split(", ")[2];

    if (response) {
      const cityObj = response.filter(
        (ob: any) =>
          ob.city === city &&
          ob.countryCode === countryCode &&
          ob.regionCode === regionCode
      );

      getLatLang(
        `${cityObj[0].latitude}#${cityObj[0].longitude}#${cityObj[0].city}, ${cityObj[0].regionCode}`
      );
    }
  };

  return (
    <div>
      {!error ? (
        <Autocomplete
          value={value}
          onChange={handleSelectedCity}
          inputValue={inputSearchValue}
          onInputChange={handleInputOnChange}
          id="controllable-states-demo"
          options={cities}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a City"
              onKeyDown={handleKeyDown}
            />
          )}
        />
      ) : (
        <ErrorPage error={error} />
      )}
    </div>
  );
}
