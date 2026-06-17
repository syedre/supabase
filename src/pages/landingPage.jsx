import React from "react";
import royal_Logo from "../assets/royal.png";
import banner from "../assets/banner.jpg";
import ContentLanding from "../components/contentBox";
import ProductDisplay from "../components/product";

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
      <div className="relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.50)]">
        <img
          src={banner}
          className="w-full  aspect-5/2 object-cover"
          alt="banner"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/40 backdrop-blur-[1px]"></div>

        <div className=" text-stone-200 text-shadow-primary-wooden absolute bottom-1/4 left-14 translate-y-1/2  font-extrabold z-100 flex flex-col  duration-500 ease-in-out group-hover:scale-110">
          <h1 className="text-4xl tracking-widest ">
            ROYAL <span className="text-[#E4B67A]">WOOD</span> INDUSTRY
          </h1>
          <div className="flex items-center gap-2">
            <div className="bg-[#E4B67A] h-px w-15"></div>
            <p className="">Made In 🇮🇳</p>
            <div className="bg-[#E4B67A] h-px w-15"></div>
          </div>

          <h4 className="text-sm tracking-widest">
            Premium Indian Wooden Handicrafts
          </h4>
        </div>
      </div>
      <ContentLanding />
      <ProductDisplay />
      <footer>footer</footer>
    </div>
  );
};

export default LandingPage;
