import DeleteForever from "@mui/icons-material/DeleteForever";
import {
  colors,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import React from "react";

const ClearCache = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    localStorage.clear();
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <DeleteForever sx={{ fontSize: "2.5rem" }} />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Cache Has Been Cleared"
      />
    </>
  );
};

export default ClearCache;
