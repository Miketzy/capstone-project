import React from "react";

function Create() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl font-semibold mb-6">Create</h1>

        {/* Select Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Select your question Type
          </label>

          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">-- Select type --</option>
            <option value="multiple">Multiple Choice</option>
            <option value="truefalse">True or False</option>
            <option value="short">Short Answer</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Create;
