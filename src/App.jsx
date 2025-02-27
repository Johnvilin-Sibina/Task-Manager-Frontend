import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/About';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import MyProvider from './Context/MyProvider';



export const myContext = createContext();


const App = () => { 


  return (
    <div>
     <BrowserRouter>  
     <ToastContainer />
     <MyProvider>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
      <Route path='/dashboard' element={<Dashboard />} />
     </Routes>
     </MyProvider>  
     </BrowserRouter>
    </div>
  );
};

export default App;