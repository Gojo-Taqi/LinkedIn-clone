// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './navbar.js'
import Main from './main.js'
import Skills from './Skills/skills.js'
import Education from './Education/education';
import Experience from './Experience/experience'
// import Example from './Education/edu-modal';
import Exam from './exp';

export default function App() {
  return (

    <div>
      <Navbar />
      <Main />
      <Skills />
      <Education />
      <Experience />
      <Exam />

    </div>
  )
}