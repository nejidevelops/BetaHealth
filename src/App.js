import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
