import { useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

function renderPage(currentPage) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Portfolio") {
    return <Portfolio />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <nav className="nav">
        <ul>
          <a onClick={() => setCurrentPage("About")}>
            <li>
              <button className="butn1">About</button>
            </li>
          </a>
          <a onClick={() => setCurrentPage("Contact")}>
            <li>
              <button className="butn1">Contact</button>
            </li>
          </a>
          <a onClick={() => setCurrentPage("Portfolio")}>
            <li>
              <button className="butn1">Portfolio</button>
            </li>
          </a>
          <a onClick={() => setCurrentPage("Resume")}>
            <li>
              <button className="butn1">Resume</button>
            </li>
          </a>
        </ul>
      </nav>
      {renderPage(currentPage)}
    </div>
  );
};


export default App;
