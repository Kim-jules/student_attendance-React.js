import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-yellow-200 font-poppins">
      <div className="">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
