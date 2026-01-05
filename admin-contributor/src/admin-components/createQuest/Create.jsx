import React from "react";

function Create() {
  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">Create</h2>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Write your question here
          </label>
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Create;
