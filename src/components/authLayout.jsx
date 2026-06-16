import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="bg-white border-r  border-zinc-200"></div>
      <div className="grid grid-cols-4 grid-rows-4 gap-px bg-zinc-200 border-r border-zinc-200 relative">
        <div className="bg-transparent "></div>
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
        <div className="bg-transparent"></div>
        <div className="flex items-center absolute  bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
