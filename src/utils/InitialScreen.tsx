import { Grid, Typography } from "@mui/material";

const InitialScreen = () => {
  return (
    <Grid item xs={12}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography>Please Make a Search</Typography>
      </div>
    </Grid>
  );
};

export default InitialScreen;
