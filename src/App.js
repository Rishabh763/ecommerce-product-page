import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const changeTab = (index) => {
    setActiveTab(index + 1);
  };

  const handleOverlay = () => {
    setIsVisible(!isVisible);
  };

  const handleCart = () => {
    if (count === 0) {
      setCart(cart);
    } else {
      setCart(!cart);
    }

    if (cart === true) {
      setCount(0);
    }
  };

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const next = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };
  const previous = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleEmptyCart = () => {
    setCount(0);
    setCart(false);
  };

  const items = [1, 2, 3, 4];
  return (
    <main className="content-grid min-h-screen">
      <Navbar
        cart={cart}
        count={count}
        activeTab={activeTab}
        handleEmptyCart={handleEmptyCart}
        cartOpen={cartOpen}
        handleCartOpen={handleCartOpen}
      />
      {cartOpen ? (
        <div className="block md:hidden bg-white shadow-2xl rounded-lg shadow-gray-400 px-4 py-6 transition-all">
          <h1 className="text-base font-bold border-b-2 py-2">Cart</h1>
          {count !== 0 && cart ? (
            <>
              <div className=" flex gap-4 items-center w-max py-4 text-sm text-gray-600">
                <img
                  className="size-14 rounded-md"
                  src={`/assets/image-product-${activeTab}.jpg`}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x {count} {"   "}
                    <span className="font-bold text-black">${count * 125}</span>
                  </p>
                </div>
                <img
                  loading="lazy"
                  src="/assets/icon-delete.svg"
                  alt="delete icon"
                  onClick={handleEmptyCart}
                />
              </div>
              <button className="py-2 px-4 bg-[#ff7d1a] rounded-lg flex gap-4 font-bold w-full items-center justify-center">
                Checkout
              </button>
            </>
          ) : (
            <div className="min-w-64 min-h-24 grid place-content-center h-full">
              Your cart is empty.
            </div>
          )}
        </div>
      ) : null}

      {/* overlay div start */}

      <div
        className={`${
          isVisible ? "block z-100" : "hidden"
        } overlay fixed inset-0 bg-black/75  grid place-content-center`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="overlay-image relative">
            <button
              className="flex items-center justify-center bg-white size-12 absolute top-1/2 right-0 rounded-full cursor-pointer translate-x-0 md:translate-x-1/2 -translate-y-1/2"
              onClick={next}
            >
              <img src="/assets/icon-next.svg" alt="cancel" />
            </button>
            <button
              className="flex items-center justify-center bg-white size-12 absolute top-1/2 left-0 rounded-full cursor-pointer translate-x-0 md:-translate-x-1/2 -translate-y-1/2"
              onClick={previous}
            >
              <img src="/assets/icon-previous.svg" alt="cancel" />
            </button>
            <button
              className="flex items-center justify-center size-12 absolute top-0 right-0 rounded-full cursor-pointer -translate-y-full"
              onClick={handleOverlay}
            >
              <img
                className="size-5 text-white fill-white"
                src="/assets/icon-close.svg"
                alt="cancel"
              />
            </button>
            <img
              className="max-w-full md:max-w-lg rounded-2xl "
              src={`/assets/image-product-${activeTab}.jpg`}
              alt=""
            />
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {items.map((i, index) => (
              <img
                key={index}
                className={`${
                  index + 1 === activeTab
                    ? "ring ring-[#ff7d1a] ring-offset-2 opacity-55 "
                    : ""
                } size-16 cursor-pointer md:size-20 rounded-lg hover:opacity-55 transition-opacity`}
                src={`/assets/image-product-${index + 1}-thumbnail.jpg`}
                alt={`preview-image-${index + 1}`}
                onClick={() => changeTab(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* overlay div end */}

      <div className="flex flex-col md:flex-row  gap-8 items-center py-6 place-self-center">
        <div className="flex flex-col items-center flex-1 gap-8">
          <img
            className="max-w-full md:max-w-md rounded-2xl"
            src={`/assets/image-product-${activeTab}.jpg`}
            alt=""
            onClick={handleOverlay}
          />
          <div className="flex gap-4 flex-wrap">
            {items.map((i, index) => (
              <img
                key={index}
                className={`${
                  index + 1 === activeTab
                    ? "ring ring-[#ff7d1a] ring-offset-2 opacity-55"
                    : ""
                }
                ${isVisible ? "" : ""} 
                size-16 cursor-pointer md:size-20 rounded-lg hover:opacity-55 transition-opacity`}
                src={`/assets/image-product-${index + 1}-thumbnail.jpg`}
                alt={`preview-image-${index + 1}`}
                onClick={() => changeTab(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-2xl font-bold text-gray-500">Sneaker Company</h1>
          <h2 className="text-5xl font-bold">Fall Limited Edition Sneakers</h2>
          <p className="text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <h3 className="text-3xl font-bold flex items-center gap-2">
            $125.00{" "}
            <span className="text-sm rounded bg-black text-gray-200 px-2 py-1 font-bold">
              50%
            </span>{" "}
          </h3>
          <h4 className="line-through text-gray-500 font-bold">$250.00 </h4>
          <div className="flex gap-2 flex-wrap flex-col md:flex-row">
            <div className="bg-gray-200 rounded-md flex items-center justify-between">
              <button
                className="p-6 bg-transparent flex items-center justify-center fill-[#FF7E1B] hover:fill-[#f89d5c] transition-colors flex-1 "
                onClick={decrement}
              >
                <img src="/assets/icon-minus.svg" alt="" />
              </button>
              <div className="p-1 flex items-center justify-center flex-1">{count}</div>
              <button
                className="p-6 bg-transparent flex items-center justify-center fill-[#FF7E1B] hover:fill-[#f89d5c] transition-colors flex-1"
                onClick={increment}
              >
                <img src="/assets/icon-plus.svg" alt="" />
              </button>
            </div>
            <button
              className="items-center justify-center py-4 px-6 bg-[#ff7d1a] hover:bg-[#f89d5c] rounded-lg flex gap-4 font-bold transition-colors"
              onClick={handleCart}
            >
              <img
                className="fill-black text-black"
                src="/assets/icon-cart.svg"
                alt=""
              />
              {cart && count !== 0 ? <>Remove from cart</> : <>Add to cart</>}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="grid place-content-center min-h-screen">
        <div className="gooey size-48 bg-green-600 ">
          
        </div>
      </div> */}
    </main>
  );
}

export default App;
