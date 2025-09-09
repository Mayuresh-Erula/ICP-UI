import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { GiStarShuriken } from "react-icons/gi";
import { BsHouseDoorFill } from "react-icons/bs";

const Icon = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-6">
    {children}
  </div>
);

const SideBar = () => {
  return (
    <aside className="w-24 bg-white border-r border-gray-100 min-h-screen flex flex-col items-center py-8 space-y-6 ">
      <div className="w-10 h-10 text-4xl text-amber-500 flex items-center justify-center">
        <GiStarShuriken />
      </div>
      <img src="" alt="avatar" className="w-10 h-10 rounded-full bg-gray-200 " />
      <div className="w-[54px] h-[54px] rounded-4xl bg-amber-400 text-white flex justify-center text-2xl  ">
        <BsHouseDoorFill className="mt-3" />
      </div>
      <div className="text-2xl">
        <Icon>🚀</Icon>
        <Icon>📝</Icon>
        <Icon>👥</Icon>
        <Icon>💽</Icon>
        <Icon>✉️</Icon>
      </div>
      <div className=" mt-auto text-lg text-gray-800 mb-40">
        <CiSettings className="w-5 h-5 mr-2.5 mb-8 " />
        <IoExitOutline className="w-5 h-5 " />
      </div>
    </aside>
  );
};

export default SideBar;
