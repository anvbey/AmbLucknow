import { Typography } from '@mui/material';
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{
        width: 'auto',
        height: 'fit-content',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: '50px 10px 30px 10px',
    }}>
      <Typography
        variant="subtitle"
        sx={{
          color: "#2CA6DB",
          padding: '50px',
          textAlign: 'center'
        }}
      >
        Copyright © 2022 Avatar Meher Baba Perpetual Public Charitable Trust,
        Ahmednagar, India. All quotes of Meher Baba copyright © Avatar Meher
        Baba Perpetual Public Charitable Trust, unless otherwise indicated.
        Photos copyright © Meher Nazar Publications and Mani S. Irani, M.S.I.
        collection; all rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
