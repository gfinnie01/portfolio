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
  <About />
 }
 if (currentPage === 'Contact') {
  <Contact />
 }
 if (currentPage === 'Portfolio') {
  <Portfolio />
 }
 if (currentPage === 'Resume') {
  <Resume />
 }
}

export default App;
