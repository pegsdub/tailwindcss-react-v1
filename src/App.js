import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import { Routes, Route } from 'react-router-dom'
import Me from './pages/me';
import ContactMe from './pages/contactme';
import Creations from './pages/creations';
import Bouncy from './pages/bouncy';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('I resized');
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/me' element={<Me />} />
        <Route path='/contactme' element={<ContactMe />} />
        <Route path='/creations' element={<Creations />} />
        <Route path='/bouncy' element={<Bouncy />} />

      </Routes>
    </>
  );
}

export default App;
