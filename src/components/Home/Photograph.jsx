import React from "react";
import { Box, Typography } from "@mui/material";

const Photograph = () => {
  const styles = {
    width: "450px",
    height: "550px",
    borderRadius: "2%",
  };
  return (
    <Box
      sx={{
        marginTop: "30px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img alt="img" src={"/assets/image.png"} style={styles} />
      <Typography
        sx={{
          margin: "10px 0 0 0",
          textAlign: "center",
        }}
      >
        Avatar Meher Baba’s Tomb Shrine
        <br />
        (Meherabad, India)
      </Typography>
    </Box>
  );
};

export default Photograph;
