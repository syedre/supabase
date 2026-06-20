import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { logo_url } from "@/assets/picture";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden ">
      <div className="relative max-w-7xl mx-auto ">
        <div
          className="overflow-hidden border border-white/10 
        bg-linear-to-r from-[#0d2e35] to-[#021016] shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="pl-10">
            <img src={logo_url} alt="Royal Wood Industry" className="w-16 " />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 px-10 pb-8 relative ">
            <div>
              <h3 className="text-xl font-semibold text-[#E4B67A]">
                Royal Wood Industry
              </h3>

              <p className="mt-4 text-sm text-zinc-300 leading-7">
                Crafting timeless wooden handicrafts with a blend of tradition,
                precision, and modern design.
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="p-2 border border-white/10 rounded-full text-zinc-300 hover:border-[#E4B67A] hover:text-[#E4B67A] transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="p-2 border border-white/10 rounded-full text-zinc-300 hover:border-[#E4B67A] hover:text-[#E4B67A] transition-all duration-300"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-5">Quick Links</h4>

              <ul className="space-y-3 text-sm text-zinc-300">
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

              <ul className="space-y-3 text-sm text-zinc-300">
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

              <div className="space-y-5 text-sm text-zinc-300">
                <div className="flex gap-3">
                  <FaMapMarkerAlt
                    size={18}
                    className="text-[#E4B67A] shrink-0 mt-0.5"
                  />
                  <span>Channapatna, Karnataka, India</span>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt size={18} className="text-[#E4B67A] shrink-0" />
                  <span>+91 XXXXX XXXXX</span>
                </div>

                <div className="flex gap-3">
                  <IoIosMail size={18} className="text-[#E4B67A] shrink-0" />
                  <span>info@royalwood.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 relative">
            <div className="px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-zinc-400 text-sm">
                © 2026 Royal Wood Industry. All rights reserved.
              </p>

              <div className="flex gap-6 text-sm text-zinc-400">
                <button className="hover:text-[#E4B67A] transition">
                  Privacy Policy
                </button>

                <button className="hover:text-[#E4B67A] transition">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
