import { Error, ReplayOutlined } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";

const ErrorPage = ({ error }: { error: string }) => {
  return (
    <Grid item xs={12}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Stack>
          <div>
            <Error />
          </div>
          <Typography color={"red"}>{error}</Typography>
          <IconButton href="/">
            <ReplayOutlined />
          </IconButton>
        </Stack>
      </div>
    </Grid>
  );
};

export default ErrorPage;
