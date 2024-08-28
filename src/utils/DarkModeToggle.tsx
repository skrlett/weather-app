import { DarkMode, WbSunnyOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const DarkModeToggle = ({ themeChange, mode }) => {
  return (
    <IconButton
      onClick={() => {
        themeChange(!mode);
      }}
    >
      {mode ? (
        <WbSunnyOutlined style={{ fontSize: "2.5rem" }} />
      ) : (
        <DarkMode style={{ fontSize: "2.5rem" }} />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
