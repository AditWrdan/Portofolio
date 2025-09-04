import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";

const App = () =>{
  return(
    
    <div className="container max-auto max-w-7xl" >
    {/* // NAVBAR */}
    <Navbar/>
    {/* //PICTURE */}
    <Hero/>
    {/* // ABOUT */}
    <About/>
    {/* // PROJECTS */}
    <Projects/>
    {/* // FOOTER */}
    <Footer/>
    </div>
     )
}
export default App