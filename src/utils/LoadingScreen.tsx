import { CircularProgress, Grid } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Grid item xs={12}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <CircularProgress />
      </div>
    </Grid>
  );
};

export default LoadingScreen;
