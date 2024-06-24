import React, { useState } from "react";

function Navbar({ cart, count, onToggleCart, cartOpen }) {
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
            } z-100 md:translate-x-0 fixed top-0 left-0 bottom-0 md:static flex flex-col md:flex-row md:gap-4 md:bg-transparent md:p-0 pl-6 pr-16 py-12 gap-4 bg-white transition-all w-4/6 md:w-auto`}
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
          <div className="relative" onClick={onToggleCart}>
            {cart && count !== 0 ? (
              <div className="absolute -top-2/3 -right-1/2 size-5 text-xs rounded-full bg-[#ff7d1a] font-bold flex items-center justify-center">
                {count}
              </div>
            ) : null}
            <img src="/assets/icon-cart.svg" alt="" />
            {(cartOpen && cart) ? (
              <div className="absolute top-[300%] left-1/2 -translate-x-1/2  bg-white shadow-2xl rounded-lg shadow-gray-400 px-4 py-6">
                <h1 className="text-base font-bold border-b-2 py-2">Cart</h1>
                <div className="w-72">

                </div>
                <button className="py-2 px-4 bg-[#ff7d1a] rounded-lg flex gap-4 font-bold w-full items-center justify-center">Checkout</button>
              </div>
            ) : null}
          </div>
          <img
            className="size-12 rounded-full transition-shadow hover:ring hover:ring-[#ff7d1a]"
            src="/assets/image-avatar.png"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
