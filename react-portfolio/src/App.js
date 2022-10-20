import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

function App() {
 const [currentPage, setCurrentPage] = useState
 ('About');

 if (currentPage === 'About') {
   return <About />
 }
 if (currentPage === 'Contact') {
  return <Contact />
 }
 if (currentPage === 'Portfolio') {
  return <Portfolio />
 }
 if (currentPage === 'Resume') {
  return <Resume />
 }
}

export default App;
