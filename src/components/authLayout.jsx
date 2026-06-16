import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="grid grid-cols-4 grid-rows-4 gap-px bg-zinc-200 border-r border-zinc-200 relative">
        <div className="bg-white "></div>
        <div className="bg-white"></div>
        <div className="bg-white"> </div>
        <div className="bg-white "></div>
        <div className="bg-white"></div>
        <div className="bg-white "></div>
        <div className="bg-white "></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white "></div>
        <div className="bg-white "> </div>
        <div className="bg-white"></div>
        <div className="bg-white "></div>
        <div className="bg-white"></div>
        <div className="bg-white"> </div>
        <div className="bg-white"></div>
      </div>
      <div className="flex items-center justify-center bg-white border-r  border-zinc-200">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
