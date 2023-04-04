import { Box, Typography } from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Sound = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h6">Sounds like:</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            background: "grey",
            width: "183px",
            borderRadius: "10px",
            padding: "10px",
            marginRight: "10px",
          }}
        >
          May . Her . Baba
        </Typography>
        <VolumeUpIcon />
      </Box>
    </Box>
  );
};

export default Sound;
