import React from "react";
import { Box } from "@mui/material";

const Box2 = (props) => {

  const { title, image } = props;

  return (
    <Box
      sx={{
        width: "200px",
        height: "200px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        '&:hover': {
          cursor: 'pointer',
          opacity: 0.5,
        }

      }}
    >
      {title}
    </Box >
  );
};

export default Box2;
