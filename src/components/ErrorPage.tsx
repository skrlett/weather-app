import React from "react";
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
          <div>
            <IconButton href="/">
              <ReplayOutlined />
            </IconButton>
          </div>
        </Stack>
      </div>
    </Grid>
  );
};

export default ErrorPage;
