import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import './assets/css/main.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Users from './components/HomePage/Users';

function App() {
  return (
    <>
   <Navbar />
   <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route exact path="/users" element={<Users />} />
    </Routes>
    
    </>
  );
}

export default App;
