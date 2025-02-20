import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/About';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import { ToastContainer } from 'react-toastify';
import DashboardHome from './Pages/DashboardHome';


export const myContext = createContext();


const App = () => { 

const [currentUser,setCurrentUser] = useState({})

  return (
    <div>
     <BrowserRouter>  
     <ToastContainer />
     <myContext.Provider value={[currentUser,setCurrentUser]} >  
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' element={<DashboardHome />} />
     </Routes>     
    </myContext.Provider> 
     </BrowserRouter>
    </div>
  );
};

export default App;