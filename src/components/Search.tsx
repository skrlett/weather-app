import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ErrorPage from "./ErrorPage";
import useCities from "../utils/useCities";

export default function Search({
  getLatLang,
}: {
  getLatLang: CallableFunction;
}) {
  const [value, setValue] = React.useState(null);
  const [inputSearchValue, setInputSearchValue] = React.useState("");
  const { cities, response, error, loadCities } = useCities();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      loadCities(inputSearchValue);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputSearchValue]);

  const handleInputOnChange = (_event: any, searchCity: string) => {
    setInputSearchValue(searchCity);
  };

  const handleSelectedCity = (_event: any, newValue: any | string) => {
    if (newValue === null) return;

    setValue(newValue);

    let [city, regionCode, countryCode] = newValue.split(", ");

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
          options={cities}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a City"
              // onKeyDown={handleKeyDown}
            />
          )}
        />
      ) : (
        <ErrorPage error={error} />
      )}
    </div>
  );
}
