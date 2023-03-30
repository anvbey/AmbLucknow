import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './container/Home';
import About from './container/About';
import Footer from './components/Footer/Footer';

function App() {
  const styles = {
    backgroundColor: '#f0ebf0',
  };
  return (
    <div style={styles}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
