import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './container/Home';
import About from './container/About';
import Footer from './components/Footer/Footer';
import Cont from './container/Contact';
import { Box} from '@mui/material'

function App() {
  
  return (
    <Box sx={{
      backgroundColor: '#f0ebf0',
      minHeight: '100%',
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Cont/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
