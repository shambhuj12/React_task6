// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="App">

    <Header className="header"></Header>
    <AboutMe></AboutMe>
    <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
