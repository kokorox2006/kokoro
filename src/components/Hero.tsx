import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('src/assets/Hero.png')] bg-cover bg-center mix-blend-lighten flex flex-col items-center gap-5 h-screen justify-center">
        <h1 className="text-8xl  text-white text-center">
          Learn like never before
        </h1>
        <p className="text-white text-2xl text-center">
          Your go-to space for reading and saving notes
        </p>
        <a href="#">
          <button className="bg-blue-500 pl-4 pr-4 pt-2 pb-2 text-white font-semibold rounded-md ">
            View Public Notes
          </button>
        </a>
      </div>
    </>
  );
};

export default Hero;
