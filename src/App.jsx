import "./App.css";
import Hero from "./Components/Hero";

import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
      <div>
        <Hero />
        <AboutPage />
        <div className="h-screen relative  bg-white ">hello</div>
        <div className="h-screen relative bg-gray-700">world</div>
      </div>
    </>
  );
}

export default App;
