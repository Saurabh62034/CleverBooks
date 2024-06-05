import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Signin from './pages/Signin';
import FooterCom from './components/Footer';
import ScrolltoTop from './components/ScrolltoTop';

function App() {
  

  return (
    <BrowserRouter>
    <ScrolltoTop />
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Project' element={<Project />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
    
      <FooterCom />
   
      
    </BrowserRouter>
  )
}

export default App
