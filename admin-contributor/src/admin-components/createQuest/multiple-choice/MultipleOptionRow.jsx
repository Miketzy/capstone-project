import React from "react";

function MultipleOptionRow() {
  const options = ["A", "B", "C", "D"];

  return (
    <div className="w-full flex flex-col gap-4">
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

      {/* Multiple Choice Options */}
      <div className="flex flex-col gap-2">
        {options.map((letter) => (
          <div key={letter} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="w-5 font-semibold">{letter}</span>
            <input
              type="text"
              placeholder={`Enter option ${letter}...`}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleOptionRow;
