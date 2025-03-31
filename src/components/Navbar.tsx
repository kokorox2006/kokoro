import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center">
        <nav className=" flex gap-64 justify-between items-center mr-auto ml-auto pt-4 pb-4">
          <div className="logo flex gap-2 items-center ">
            <img src="src/assets/logo.png" alt="" className="w-8" />
            <p className="text-2xl text-white font-medium">kokoro</p>
          </div>
          <ul className="flex gap-8 text-white">
            <li>Public notes</li>
            <li>Publish</li>
            <li>Community</li>
            <li>GitHub</li>
          </ul>
          <button className="bg-blue-500 pl-4 pr-4 pt-2 pb-2 text-white font-semibold rounded-md bg-gradient-to-b">
            Sign up
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
