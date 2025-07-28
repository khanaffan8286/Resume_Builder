import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';

import Temp from './route/Temp';
import Resumeb from './route/Resumeb';
import Samples from './route/Samples'; 
import Home from './route/Home ';
import Login from './route/Login';
// import Resumein from './component/Resumein';




function App() {
  const[isAuth, setIsAuth] = useState(false);
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/temp" element={<Temp/>} />
      <Route path="/resumeb" element={<Resumeb/>} />
      <Route path="/sample" element={<Samples/>} />
      
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      
      
      
    </Routes>

  );


}


export default App;