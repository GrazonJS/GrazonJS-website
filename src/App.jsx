import "./App.css";
import Hero from "./Components/Hero";

import AboutPage from "./Components/AboutPage";
import AboutMePage from "./Pages/AboutMePage";

function App() {
  return (
    <>
      <div>
        <Hero />
        <AboutPage />
        <AboutMePage />
        <div className="h-screen relative bg-gray-700">world</div>
      </div>
    </>
  );
}

export default App;
