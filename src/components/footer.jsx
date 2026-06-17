import React from "react";
import royal_Logo from "../assets/royal.png";
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className=" text-zinc-700">
        <div className=" mx-auto px-8 py-16 grid grid-cols-4  gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-[#E4B67A]">
              Royal Wood Industry
            </h3>

            <p className="mt-4 text-sm text-zinc-400 leading-7">
              Crafting timeless wooden handicrafts with a blend of tradition,
              precision, and modern design.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 border border-zinc-700 rounded-full hover:border-[#E4B67A] hover:text-[#E4B67A] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="p-2 border border-zinc-700 rounded-full hover:border-[#E4B67A] hover:text-[#E4B67A] transition"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#E4B67A] cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-[#E4B67A] cursor-pointer transition">
                Products
              </li>

              <li className="hover:text-[#E4B67A] cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-[#E4B67A] cursor-pointer transition">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Products</h4>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Wooden Toys</li>
              <li>Home Decor</li>
              <li>Custom Handicrafts</li>
              <li>Gift Collections</li>
              <li>Traditional Art Pieces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact Information
            </h4>

            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt
                  size={18}
                  className="text-[#E4B67A] shrink-0 mt-0.5"
                />
                <span className="text-zinc-400">
                  Channapatna, Karnataka, India
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt size={18} className="text-[#E4B67A] shrink-0" />
                <span className="text-zinc-400">+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <IoIosMail size={18} className="text-[#E4B67A] shrink-0" />
                <span className="text-zinc-400">info@royalwood.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light-wood">
          <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-zinc-500 text-sm">
              © 2026 Royal Wood Industry. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-zinc-500">
              <button className="hover:text-[#E4B67A] transition">
                Privacy Policy
              </button>

              <button className="hover:text-[#E4B67A] transition">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
