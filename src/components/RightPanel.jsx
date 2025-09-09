import React from "react";

function Field({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-2 " aria-labelledby="dropdownLargeButton">{label}</label>
      <div className=" border-1  border-gray-300 rounded-xl p-3 text-sm " aria-labelledby="dropdownLargeButton">{placeholder}</div>
    </div>
  );
}

const RightPanel = () => {
  return (
    <div className="bg-white  p-6 mb h-[68vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent shadow">
      <h3 className="text-3xl font-semibold">
        Let’s define your <span className="text-amber-400">targets</span>
      </h3>
      <p className="text-sm text-gray-400 mt-1 mb-6">
        Focus on the most relevant fields to shape your ICP — all fields are
        optional
      </p>

      <div className="mb-6">
        <h4 className=" text-2xl font-medium text-gray-700 mb-3">
          Company Profile
        </h4>
        <div className="border-gray-300 p-2 border-1 h-full rounded-2xl">
          <Field label="Company Headcount" placeholder="1-10... " />
          <Field label="Company HQ Locations" placeholder="India..." />
          <Field label="Revenue range" placeholder="50L - 1Cr..." />
        </div>
      </div>

      <div>
        <h4 className="font-medium text-2xl  text-gray-700 mb-3">Prospect Profile</h4>
        <div className="border-gray-100 p-2 border-2 h-full rounded-2xl">
        <Field label="Department" placeholder="Search department..." />
        <Field label="Role seniority" placeholder="Select..." />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
