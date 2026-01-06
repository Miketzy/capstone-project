import React from "react";

function MultipleOptionRow() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Question Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Write your question here
        </label>
        <input
          type="text"
          placeholder="Enter your multiple choice question..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Points Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Points for this answer
        </label>
        <input
          type="number"
          placeholder="Enter points..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default MultipleOptionRow;
