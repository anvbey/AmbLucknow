import React from "react";
import { Box } from "@mui/material";
import Box1 from "../../components/Archives/box1";
import Box2 from "../../components/Archives/box2"

const grid = () => {
  return (
    <Box>
      <Box sx={{
        minHeight: '72vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <Box1/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <Box2/>
          <Box2/>
          <Box2/>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <Box2/>
          <Box2/>
          <Box2/>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <Box2/>
          <Box2/>
          <Box2/>
        </Box>
      </Box>
    </Box>
  );
};

export default grid;
