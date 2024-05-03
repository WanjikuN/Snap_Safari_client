import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './assets/css/main.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Users from './components/HomePage/Users';
import Albums from './components/HomePage/Albums';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[value, setValue] = useState("");
  const notify = () => toast(`Welcome  ${value}`);

  console.log(value);
  const  navigate = useNavigate()
  useEffect(() => {
    if (value) {
      navigate("/users");
      notify();

    }
    else{
      navigate("/");

    }
  }, [value]);

  return (
    <>
   <ToastContainer />
   <Navbar />
   <Routes>
    <Route exact path="/" element={<LandingPage  value={value} setValue={setValue}/>} />
    {/* restrict path if there is no email in storage */}
    {value?
    <>
    <Route exact path="/users" element={<Users />} />
    <Route exact path="/albums" element={<Albums />} />
    </>:null}
    </Routes>
    
    </>
  );
}

export default App;
