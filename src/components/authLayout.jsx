import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="bg-zinc-300  border-zinc-300 flex relative items-center flex-row-reverse">
        <div className="w-30 h-30 bg-white translate-x-1/2 rotate-45 z-10"></div>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
