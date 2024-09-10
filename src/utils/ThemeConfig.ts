import { createTheme, ThemeOptions } from "@mui/material/styles";

export const darkTheme = (darkMode: boolean): ThemeOptions =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });