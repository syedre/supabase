import React, { useState } from "react";

export default function CustomSwitch({ enabled, setEnabled }) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-14 h-8 rounded-full p-0.5 cursor-pointer
        ${enabled ? "bg-sky-400" : "bg-zinc-300"}`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white transition-all duration-300 
          ${enabled ? "translate-x-7 " : "translate-x-0"} `}
      ></div>
    </button>
  );
}
