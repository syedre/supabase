import React from "react";
const fruits = ["apple", "banana", "orange", "mango"];

const CustomSelect = () => {
  return (
    <div className="group w-max">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-80">
        Menu
      </button>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out bg-gray-300 text-brown-500 group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="cursor-pointer list-none p-2">
              rehan - {i}
            </li>
          ))}
        </div>
      </div>
    </div>
    // <div className="">
    //   <label for="toggle" className="">
    //     Show Fruits
    //   </label>
    //   <input type="checkbox" id="toggle" className="new-in hidden" />
    //   <div className="card">
    //     {fruits?.map((i) => {
    //       return <div>{i}</div>;
    //     })}
    //   </div>
    // </div>
  );
};

export default CustomSelect;
