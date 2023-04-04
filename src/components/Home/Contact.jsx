import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => {
  return (
    <Box>
      <TextField
        label="Your Email"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          borderColor: "#1976D2",
        }}
      />
      <Button
        variant="contained"
        sx={{
          height: "55px",
          border: "none",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        Contact Us!
      </Button>
    </Box>
  );
};

export default Contact;
