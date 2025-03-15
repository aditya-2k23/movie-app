import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-2 cursor-pointer">
        <img src="/mavora.png" alt="logo" className="w-[76px] h-[55px] mr-3" />
        <div className="hidden md:block">
          <h2 className="text-white uppercase">
            <span className="text-[#F9FF00]">M</span>
            <span className="text-[#AB8BFF]">a</span>
            <span className="text-[#FF2966]">v</span>ora
          </h2>
          <p className="text-sm text-gray-200 font-medium italic">
            Streaming, Redefined...
          </p>
        </div>
      </div>

      <nav className="ml-4">
        <ul className="flex space-x-5 md:space-x-10">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#my-space">My Space</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
