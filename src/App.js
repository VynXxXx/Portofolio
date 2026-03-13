import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import { heroData } from "./data/heroData";

function App() {
 return(
  <>
    <Header/>
    <Hero {...heroData}/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
 );
}

export default App;
