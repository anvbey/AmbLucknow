import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./container/Home";
import About from "./container/About";
import Footer from "./components/Footer/Footer";
import Cont from "./container/Contact";
import { Box } from "@mui/material";
import Donate from "./container/Donate";
import Archives from './container/Archives'
import MSIrani from "./container/MSIrani";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#f0ebf0",
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Cont />} />
        <Route path="donate" element={<Donate />} />
        <Route path='archives' element={<Archives/>}/>
        <Route path='msirani' element={<MSIrani/>}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
