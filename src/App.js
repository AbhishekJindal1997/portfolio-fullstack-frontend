// React Libraries
import React from "react";

// Components and Constants
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container/Index";
import { Navbar } from "./components/Index";

// Styling
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
