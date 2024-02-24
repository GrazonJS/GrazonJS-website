import "./App.css";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import AboutSlide from "./slides/AboutSlide";
import About from "./Components/About";
import { motion, useAnimation } from "framer-motion";

function App() {
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();
  const [showComponent, setShowComponent] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const secondComponentScrollPosition = window.innerHeight;
    const thirdComponentScrollPosition = 2 * window.innerHeight;

    if (scrollY < secondComponentScrollPosition) {
      controlsSecond.start({ opacity: 1, y: 0 });
    } else {
      controlsSecond.start({ opacity: 1, y: "-100%" });
    }

    if (scrollY >= thirdComponentScrollPosition) {
      controlsThird.start({ opacity: 1, y: "-100%" });
    } else {
      controlsThird.start({ opacity: 1, y: 0 });
    }
  };

  // Attach the scroll event listener to control animations
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Hero />
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controlsSecond}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <AboutSlide />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={controlsThird}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
      </div>
    </>
  );
}

export default App;
