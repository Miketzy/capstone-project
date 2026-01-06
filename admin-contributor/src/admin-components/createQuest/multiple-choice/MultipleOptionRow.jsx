import React from "react";

function MultipleOptionRow() {
  const options = ["A", "B", "C", "D"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submit logic, e.g., gather question, points, and options
    alert("Form submitted!");
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Question Input */}
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
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

      {/* Options Label */}
      <div className="text-sm font-medium text-gray-700">
        Input options for the question and select the correct answer
      </div>

      {/* Multiple Choice Options */}
      <div className="flex flex-col gap-2">
        {options.map((letter) => (
          <div key={letter} className="relative">
            <input
              type="text"
              placeholder={`Enter option ${letter}...`}
              className="w-full border border-gray-300 rounded-lg px-14 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Checkbox + Letter inside input */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="font-semibold">{letter}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default MultipleOptionRow;
