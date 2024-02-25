import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    scroll: scrollRef,
    offset: ["start start", "end start"],
  });

  //const aboutSlideY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const aboutInfoY = useTransform(scrollYProgress, [0, 1], ["0%", "240%"]);
  return (
    <div ref={scrollRef} className="h-screen relative item-center">
      {/* <motion.section
        style={{ y: aboutSlideY }}
        className="text-3xl bg-black h-3/5 text-white relative flex justify-center item-center "
      >
        <h1>ABOUT</h1>
      </motion.section> */}
      <motion.div
        style={{ y: aboutInfoY }}
        className="absolute inset-0 h-screen "
      >
        <About />
      </motion.div>
    </div>
  );
}

export default AboutPage;
