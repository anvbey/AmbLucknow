import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          marginTop: "50px",
        }}
      >
        Contact Us!
      </Typography>
      <Box
        sx={{
          margin: "50px 0 0 0",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Email: test@gmail.com</Typography>
        <Typography variant="h6">Mobile Number: xxxx xxx xxx</Typography>
      </Box>
      <Box
        sx={{
          margin: "50px 0 50px 0",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Email: test@gmail.com</Typography>
        <Typography variant="h6">Mobile Number: xxxx xxx xxx</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
