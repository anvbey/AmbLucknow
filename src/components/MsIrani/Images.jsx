import { Box, Typography } from "@mui/material";
import React from "react";
import Box3 from "../../components/Archives/box3";


const Images = () => {
  return (
    <Box>
      <Typography variant="h6">More Images:</Typography>
      <Box sx={{
        display: 'flex'
      }}>
        <Box3 />
        <Box3 />
        <Box3 />
        <Box3 />
        <Box3/>
      </Box>
    </Box>
  );
};

export default Images;
