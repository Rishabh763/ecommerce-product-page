import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const changeTab = (index) => {
    setActiveTab(index + 1);
  };

  const handleOverlay = () => {
    setIsVisible(!isVisible);
  };
  const increment = () => {
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };
  const decrement = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const items = [1, 2, 3, 4];
  return (
    <main className="content-grid min-h-screen">
      <Navbar />


      {/* overlay div start */}

      <div
        className={`${
          isVisible ? "block z-100" : "hidden"
        } overlay fixed inset-0 bg-black/75  grid place-content-center`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="overlay-image relative">
            <button
              className="flex items-center justify-center bg-white size-12 absolute top-1/2 right-0 rounded-full cursor-pointer translate-x-1/2 -translate-y-1/2"
              onClick={increment}
            >
              <img src="/assets/icon-next.svg" alt="cancel" />
            </button>
            <button
              className="flex items-center justify-center bg-white size-12 absolute top-1/2 left-0 rounded-full cursor-pointer -translate-x-1/2 -translate-y-1/2"
              onClick={decrement}
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
          <div className="flex gap-4 flex-wrap">
            {items.map((i, index) => (
              <img
                key={index}
                className={`${
                  index + 1 === activeTab
                    ? "ring ring-[#ff7d1a] ring-offset-2 opacity-55 "
                    : ""
                } size-16 md:size-20 rounded-lg hover:opacity-55 transition-opacity`}
                src={`/assets/image-product-${index + 1}-thumbnail.jpg`}
                alt={`preview-image-${index + 1}`}
                onClick={() => changeTab(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* overlay div end */}


      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        <div className="flex flex-col items-center gap-8">
          <img
            className="max-w-full md:max-w-md rounded-2xl"
            src={`/assets/image-product-${activeTab}.jpg`}
            alt=""
            onClick={handleOverlay}
          />
          <div className="flex gap-4 ">
            {items.map((i, index) => (
              <img
                key={index}
                className={`${
                  index + 1 === activeTab
                    ? "ring ring-[#ff7d1a] ring-offset-2 opacity-55"
                    : ""
                }
                ${
                  isVisible ? '' : ''
                } 
                size-16 md:size-20 rounded-lg hover:opacity-55 transition-opacity`}
                src={`/assets/image-product-${index + 1}-thumbnail.jpg`}
                alt={`preview-image-${index + 1}`}
                onClick={() => changeTab(index)}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl">Sneaker Company</h1>
          <h2 className="text-5xl font-bold">Fall Limited Edition Sneakers</h2>
          <p className="text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          $125.00 50% $250.00 0<button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}

export default App;
