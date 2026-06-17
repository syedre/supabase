import React from "react";
import royal_Logo from "../assets/royal.png";
import banner from "../assets/banner.jpg";
import prod_1 from "../assets/prod_1.jpeg";
import prod_2 from "../assets/prod_2.jpeg";
import prod_3 from "../assets/prod_3.jpeg";
import prod_4 from "../assets/prod_4.jpeg";

const obj = {
  1: prod_1,
  2: prod_2,
  3: prod_3,
  4: prod_4,
};

const LandingPage = () => {
  return (
    <div className="hide-scrollbar overflow-y-auto">
      <div className="z-10 h-20.25 top-0 left-0 fixed w-full flex justify-between items-center   ">
        <div className=" rounded-full ">
          <img src={royal_Logo} className="w-14 h-20 ml-10" alt="logo" />
        </div>
        <nav className="text-amber-50 pr-10 ">
          <ul className="flex gap-6 cursor-pointer">
            <li className=" hover:underline transition-all duration-150 ">
              Home
            </li>
            <li className="hover:underline">Products</li>
            <li className="hover:underline">Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="relative group">
        <img
          src={banner}
          className="w-full  aspect-5/2 object-cover"
          alt="banner"
        />
        <div className="text-stone-200 text-shadow-primary-wooden absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2  font-extrabold z-100 flex flex-col transition-all duration-500 ease-in-out group-hover:scale-110">
          <h1 className="text-6xl tracking-widest ">ROYAL WOOD</h1>
          <h4 className="text-3xl tracking-widest"> Handcrafted in 🇮🇳</h4>
        </div>
      </div>
      <div className="p-10 h-full">
        <h2 className=" font-bold text-2xl pb-2">Products</h2>
        <div className="border border-primary-wooden w-full h-full rounded-2xl flex flex-col items-center gap-2 pb-4">
          <div className="grid grid-cols-4 gap-2 w-full h-auto p-2 ">
            {[1, 2, 3, 4]?.map((i) => {
              const url = `prod_${i}`;
              return (
                <div className="product-card">
                  <div className="flex-2">
                    <img
                      src={obj[i]}
                      alt={`prod_${i}`}
                      className="aspect-video w-full h-75 rounded-b-2xl"
                    />
                  </div>
                  <div className="flex-1">2</div>
                </div>
              );
            })}
          </div>
          <div>
            <button className="border w-50 border-primary-wooden text-primary-wooden p-2 rounded-sm">
              View Products
            </button>
          </div>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default LandingPage;
