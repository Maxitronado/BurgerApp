import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ContactInfo from './Contactinfo';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="menu-container">
        <Menu />
      </div>
      <div className="contact-info-container">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
