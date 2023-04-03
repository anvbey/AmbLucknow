import React from "react";
import { Box, Button } from "@mui/material";

const donate = () => {
  return (
    <Box
      sx={{
        minHeight: "72vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "10",
        }}
      >
        <Button
          variant="contained"
          style={{
            borderRadius: 15,
            minWidth: "100px",
          }}
        >
          Donate
        </Button>
      </Box>
    </Box>
  );
};

export default donate;
