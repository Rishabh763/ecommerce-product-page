import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  
  const changeTab = (index) => {
    setActiveTab(index + 1);
  };

  const handleOverlay = () => {
    setIsVisible(!isVisible);
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


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
        <div className="flex flex-col items-center gap-8">
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

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-500">Sneaker Company</h1>
          <h2 className="text-5xl font-bold">Fall Limited Edition Sneakers</h2>
          <p className="text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <h3 className="text-3xl font-bold flex items-center gap-2">$125.00 <span className="text-sm rounded bg-black text-gray-200 px-2 py-1 font-bold">50%</span> </h3>
          <h4 className="line-through text-gray-500 font-bold">$250.00 </h4>
          <div className="flex gap-2 flex-wrap">
            <div className="bg-gray-200 rounded-md flex items-center">
              <button className="p-6 bg-transparent grid place-items-center" onClick={decrement}><img src="/assets/icon-minus.svg" alt=""/></button>
              <div className="p-1">{count}</div>
              <button className="p-6 bg-transparent grid place-items-center" onClick={increment}><img src="/assets/icon-plus.svg" alt=""/></button>
            </div>
            <button className="py-4 px-6 bg-[#ff7d1a] rounded-lg flex gap-4 font-bold items-center"><img className="fill-black text-black" src="/assets/icon-cart.svg" alt="" />Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
