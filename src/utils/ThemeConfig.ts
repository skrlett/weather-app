import { ThemeOptions } from "@mui/material/styles";

export const darkTheme = (darkMode: boolean): ThemeOptions => ({
  palette: {
    mode: darkMode ? "dark" : "light",
  },
});
