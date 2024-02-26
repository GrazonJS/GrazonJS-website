import React from "react";

function AboutMePage() {
  return (
    <section className=" bg-about-me relative flex text-white justify-center  items-center h-screen">
      <div className="h-4/5  w-4/5 flex flex-row justify-center  items-center  ">
        <img
          src="src/assets/profile.jpg"
          className="relative rounded-3xl h-{500px}"
          alt="profile"
          width={"500px"}
          height={"500px"}
        />
        <div className="flex flex-col items-center h-72 justify-around pl-10">
          <h2 className="text-5xl ">About Me </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            aliquam necessitatibus dolorum, provident deserunt blanditiis
            sapiente earum cum, molestiae consectetur doloremque, eligendi
            voluptatem quasi aut optio beatae dolor temporibus quia.
          </p>
          <button className="bg-slate-500">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default AboutMePage;
