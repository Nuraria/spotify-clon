import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_left"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Попробовать премиум
          </p>
          <p className="bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer">
            Установить приложение
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
