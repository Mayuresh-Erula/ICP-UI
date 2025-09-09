import React from "react";
import { LuPencilLine } from "react-icons/lu";
import { PiLessThanThin } from "react-icons/pi";

const steps = ["Who", "What/Why", "Where", "When"];

const TopBar = () => {
  return (
    <header className="h-22 border-b-1 px-[full]  border-gray-200 flex items-center justify-between  ">
      <div className="flex items-center gap-4 mb-3">
        <button className="px-3.5 py-4 border-1  border-gray-300 rounded text-lg font-extrabold">
          <PiLessThanThin />
        </button>
        <div className="flex items-center gap-2 text-gray-700 border-1 border-gray-300 p-3 w-full rounded-lg ">
          <span className="text-lg font-medium">Untitled List</span>
          <span className= "text-gray-800 ">
            <LuPencilLine />
          </span>
        </div>
        <div className="flex ml-80 mr-20 mb-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`h-1.5 w-25 rounded-full ${
                  i === 0 ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500" : "bg-gray-200"
                }`}
              />
              <span
                className={`text-lg mt-1 ${
                  i === 0 ? "text-yellow-500 font-medium" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <button className="text-xl text-gray-500">Save</button>
        <button className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-4 py-2 rounded text-white font-medium">
          Make Campaign
        </button>
      </div>
    </header>
  );
};

export default TopBar;
