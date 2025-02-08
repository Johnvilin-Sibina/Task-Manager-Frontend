import React, { createContext, useContext, useState } from 'react';
import Navigationbar from './Components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/About';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

export const myContext = createContext();

const [user,setUser] = useState({})

const App = () => {
  return (
    <div>
     <BrowserRouter>  
     <myContext.Provider value={[user,setUser]} >        
     <Navigationbar />
    </myContext.Provider> 
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;