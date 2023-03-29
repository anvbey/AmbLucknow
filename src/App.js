import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './container/Home';
import About from './container/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
