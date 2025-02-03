import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import bgImage from "./img/bg3.jpg";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  // 🌗 State for dark mode toggle
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Get theme from localStorage
  });

  // 🌗 Apply the theme when app loads
    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "black"; // Set HTML background
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "white"; // Set HTML background
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🌗 Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // 🎨 Background styling
  const formStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "15rem",
    backgroundImage: "linear-gradient(to bottom, #18181b, transparent)",
    backdropFilter: "blur(0px)",
    zIndex: 1,
  };

  return (
    <>
      <Router>
        {/* ✅ Pass `toggleTheme` to Navbar */}
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className={`flex flex-col font-light ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}`}>
          <Hero darkMode={darkMode} />
          <div className="backdrop-t backdrop-blur-sm" style={formStyle}>
            <div style={overlayStyle}></div>
            <Form darkMode={darkMode} />
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;