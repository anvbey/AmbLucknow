import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const Feedback = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    query: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormReset = () => {
    setFormValues({
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      query: "",
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: '100%',
        display: "flex",
        flex: '1',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: '50px'
      }}
    >
      <Typography variant="h2">Feedback</Typography>
      <Box
        sx={{
          width: "100%",
          margin: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          id="name-input"
          label="Name"
          variant="standard"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <TextField
          id="email-input"
          label="Email"
          variant="standard"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          margin: "30px 0 30px 0",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          id="phone-input"
          label="Phone Number"
          variant="standard"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
        />
        <TextField
          id="city-input"
          label="City"
          variant="standard"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          margin: "50px 50px 50px 50px",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          id="query-input"
          label="Query"
          variant="standard"
          fullWidth
          name="query"
          value={formValues.query}
          onChange={handleInputChange}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="contained"
          style={{ borderRadius: 15, minWidth: "100px" }}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="error"
          style={{ borderRadius: 15, minWidth: "100px" }}
          onClick={handleFormReset}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Feedback;
