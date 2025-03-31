import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="pl-32 pr-32 pt-5 pb-5 flex justify-between items-center">
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
    </>
  );
};

export default Navbar;
