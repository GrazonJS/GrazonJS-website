import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <main className=" bg-black text-white  flex flex-col h-screen hero-bg ">
      <Header />
      <div className="flex justify-center items-center h-4/5 text-center mt-5 flex-col">
        <span className="text-9xl font-heading font-bold  ">
          <h1 className="text-container">Hi. I'm Graceshon.</h1>
          <h1 className="text-container"> A Developer.</h1>
        </span>
        <br />
        <br />
        <span className="font-casual text-xl w-2/5 mt-6">
          <p>
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </p>
        </span>
      </div>
    </main>
  );
}

export default Hero;
