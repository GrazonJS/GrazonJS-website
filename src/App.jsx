import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import AboutSlide from "./slides/AboutSlide";
import About from "./Components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Hero />
        <AboutSlide />
        <About />
      </div>
    </>
  );
}

export default App;
