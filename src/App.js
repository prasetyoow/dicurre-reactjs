import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreatePin from "./pages/CreatePin"
import CreatePinSucess from "./pages/CreatePinSuccess";
import Dashboard from "./pages/Dashboard";
import TopUp from "./pages/TopUp";
import History from "./pages/History";
import SearchReceiver from "./pages/SearchReceiver";
import Profile from "./pages/Profile"
import PersonalInfo from "./pages/PersonalInfo"
import AddPhNumber from "./pages/AddPhNumber"
import ManagePhNumber from "./pages/ManagePhNumber"
import ChangePassword from "./pages/ChangePassword"
import ChangePIN from "./pages/ChangePIN"
import ChangeNewPIN from "./pages/ChangeNewPIN"
import Transfer from "./pages/Transfer"
import Confirmation from "./pages/Confirmation"
import StatusSuccess from "./pages/StatusSuccess";
import StatusFailed from "./pages/StatusFailed";
import PrivateRoute from "./components/PrivateRoute";

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
        <Route 
          path="/Dashboard" 
          element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
        />
        <Route path="/Topup" element={<TopUp />} />
        <Route path="/History" element={<History />} />
        <Route path="/SearchReceiver" element={<SearchReceiver />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/AddPhNumber" element={<AddPhNumber />} />
        <Route path="/ManagePhNumber" element={<ManagePhNumber />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/ChangePIN" element={<ChangePIN />} />
        <Route path="/ChangeNewPIN" element={<ChangeNewPIN />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/StatusSuccess" element={<StatusSuccess />} />
        <Route path="/StatusFailed" element={<StatusFailed />} />
      </Routes>
    
  )
}

export default App;
