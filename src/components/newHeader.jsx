import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo_url } from "@/assets/picture";

export const NewHeader = ({ isLogo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const isLanding = location.pathname === "/landing";
  const isProducts = location.pathname === "/products";

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 z-100 w-full h-20 flex items-center justify-between
        ${!isLanding ? "bg-black/50 backdrop-blur-xl" : ""}`}
      >
        {/* Logo */}
        {isLogo ? (
          <div>
            <img
              src={logo_url}
              className="w-14 h-20 ml-5 md:ml-10"
              alt="logo"
            />
          </div>
        ) : (
          <div className="w-24" />
        )}

        {/* Desktop Nav */}
        <nav
          className={`hidden md:block text-amber-50
            ${isLanding ? "bg-black/40 backdrop-blur-xl rounded-xl" : ""}
          `}
        >
          <ul className="flex gap-6 px-6 py-2">
            <li
              className={`cursor-pointer transition
                ${isLanding ? "text-amber-300" : ""}
              `}
              onClick={() => navigate("/landing")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer transition
                ${isProducts ? "text-amber-300" : ""}
              `}
              onClick={() => navigate("/products")}
            >
              Products
            </li>

            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl mr-5"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>

        <div className="hidden md:block w-24" />
      </header>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-199
        transition-all duration-300 md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-70
        bg-white/10 backdrop-blur-3xl
        border-l border-white/10
        shadow-[-10px_0_40px_rgba(0,0,0,0.5)]
        z-200
        transition-transform duration-300 ease-out
        md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">
          <img src={logo_url} alt="logo" className="w-12" />

          <button onClick={() => setOpen(false)} className="text-white text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="mt-8 px-6 flex flex-col gap-6 text-lg">
          <li
            onClick={() => handleNavigate("/landing")}
            className={`cursor-pointer transition-all duration-200
            ${
              isLanding ? "text-amber-300" : "text-white hover:text-amber-300"
            }`}
          >
            Home
          </li>

          <li
            onClick={() => handleNavigate("/products")}
            className={`cursor-pointer transition-all duration-200
            ${
              isProducts ? "text-amber-300" : "text-white hover:text-amber-300"
            }`}
          >
            Products
          </li>

          <li className="text-white hover:text-amber-300 cursor-pointer transition-all duration-200">
            Contact Us
          </li>
        </ul>

        {/* Footer */}
        <div className="absolute bottom-8 left-6">
          <p className="text-xs text-zinc-400 tracking-widest">
            ROYAL WOOD INDUSTRY
          </p>
        </div>
      </div>
    </>
  );
};
