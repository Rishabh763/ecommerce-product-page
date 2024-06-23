import React, { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="full-width h-fit">
      <nav className="border-b-2 py-8 flex justify-between items-center">
        <div className="block md:hidden z-1000" onClick={toggleMenu}>
          <img src="/assets/icon-menu.svg" alt="" />
        </div>
        <div className="flex gap-24">
          <img src="/assets/logo.svg" alt="" />
          <ul
            className={`${
              toggle ? "translate-x-[-100%]" : "translate-x-[0%]"
            } z-100 md:translate-x-0 fixed top-0 left-0 bottom-0 md:static flex flex-col md:flex-row md:gap-4 md:bg-transparent md:p-0 pl-6 pr-16 py-12 gap-4 bg-white transition-all`}
          >
            <div className="block md:hidden pb-6" onClick={toggleMenu}>
              <img src="/assets/icon-close.svg" alt="" />
            </div>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 sm:gap-8 md:gap-12 items-center">
          <img src="/assets/icon-cart.svg" alt="" />
          <img className="size-12" src="/assets/image-avatar.png" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
