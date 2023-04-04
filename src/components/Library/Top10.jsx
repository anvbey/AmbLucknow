import { Box, Typography } from "@mui/material";
import React from "react";
import Box4 from "../Archives/box4";

const Top10 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          margin: "40px 0 40px 40px",
        }}
      >
        <Typography variant="h2">Top 10 books for you...</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
      </Box>
    </Box>
  );
};

export default Top10;
