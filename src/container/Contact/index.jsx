import { Box } from "@mui/material";
import React from "react";
import Contact from "../../components/Contact/Contact";
import Feedback from "../../components/Contact/Feedback";

const Cont = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '560px'
      }}
    >
      <Contact />
      <Feedback />
    </Box>
  );
};

export default Cont;
