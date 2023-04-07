import React from "react";
import { Box } from "@mui/material";
import Box1 from "../../components/Archives/box1";
import Box2 from "../../components/Archives/Box2";
import { archives_data } from "../../dummy_data/archive_data";

const grid = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "72vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box1 />
        <Box
          sx={{
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",  
          }}
        >
          {archives_data.map((data) => {
            return (
              <Box2
                id={data.id}
                title={data.title}
                image={data.image}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default grid;
