import { Box } from "@mui/material";
import React from "react";
import Name from "../../components/MsIrani/Name";
import Sound from "../../components/MsIrani/Sound";
import Images from "../../components/MsIrani/Images";
import Content from "../../components/MsIrani/Content";

const MSIrani = () => {
  return (
    <Box
      sx={{
        margin: "50px 100px 50px 100px",
      }}
    >
      <Name/>
      <Sound/>
      <Images/>
      <Content/>
    </Box>
  );
};

export default MSIrani;
