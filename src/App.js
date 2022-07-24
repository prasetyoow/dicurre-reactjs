import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreatePin from "./pages/CreatePin"
import CreatePinSucess from "./pages/CreatePinSuccess";

function App() {
  return (
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CreatePin" element={<CreatePin />} />
        <Route path="/CreatePinSuccess" element={<CreatePinSucess />} />
      </Routes>
    
  )
}

export default App;
