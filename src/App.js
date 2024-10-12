import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import bgImage from './img/bg3.jpg';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  const formStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)), url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative', // Ensure the overlay is positioned relative to this element
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '15rem', // Adjust the height as needed for the area to be blurred
    backgroundImage: 'linear-gradient(to bottom, #18181b, transparent)',
    backdropFilter: 'blur(0px)', // Adjust the blur strength as needed
    zIndex: 1, // Ensure the overlay is above the background image
  };


  return (
    <>
      <Router>
        <Navbar />
        <div className="flex flex-col font-light bg-zinc-900 text-white">
          <Hero />
          <div className="backdrop-t backdrop-blur-sm" style={formStyle}>
            <div style={overlayStyle}></div>
            <Form />
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
