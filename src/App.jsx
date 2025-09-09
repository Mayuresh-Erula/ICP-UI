import React from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import ChantPanel from "./components/ChantPanel";
import RightPanel from "./components/RightPanel";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />
      <div className="flex-1 p-6 border-2 border-gray-200 rounded-4xl mb-25 mt-10 ml-5 mr-5 grid-cols-2">
        <TopBar className="w-full" />

        <div className="mt-6 grid grid-cols-12">
          <div className="col-span-8 border-r-1 border-gray-200">
            <ChantPanel />
          </div>
          <div className="col-span-4">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
