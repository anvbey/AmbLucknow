import React from "react";
import { Box, Typography } from "@mui/material";
import Box5 from "./box5";

const box4 = () => {
  return (
    <Box
      sx={{
        background: "grey",
        width: "1400px",
        height: "300px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <Box>
        <Typography variant="h4">1. Book Name</Typography>
        <Typography
          variant="h6"
          sx={{
            margin: "20px 0px 0px 38px",
          }}
        >
          Book author and details..
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "15px 30px 0 0",
        }}
      >
        <Box5 />
      </Box>
    </Box>
  );
};

export default box4;
