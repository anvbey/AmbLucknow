import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // background: 'pink',
        justifyContent: "space-between",
      }}
    >
      {/* Description */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // background: 'yellow',
          justifyContent: "center",
          alignItems: "center",
          flex: "70%",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "60px",
              xl: "100px",
            },
            color: "#2CA6DB",
          }}
        >
          Avatar Meher Baba
        </Typography>
        <Box
          sx={{
            background: "#CA7233",
            height: "0px",
            width: "429px",
            border: "2px solid #CA7233",
            marginBottom: "15px",
          }}
        ></Box>
        <Typography fontSize={"30px"}>
          "Things that are Real are given and received in Silence."
        </Typography>
      </Box>
      {/* Photogragh */}
      <Box
        sx={{
          // background: 'green',
          marginTop: "30px",
          marginRight: "10px",
          marginLeft: "30px",
          flex: "30%",
        }}
      >
        <img alt="img" src={"/assets/image.png"} width="450" height="550" />
      </Box>
    </Box>
  );
};

export default Hero;
