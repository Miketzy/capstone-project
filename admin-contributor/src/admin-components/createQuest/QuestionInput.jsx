import React from "react";

function QuestionInput() {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Write your question here
      </label>
      <input
        type="text"
        placeholder="Type your question..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>
  );
}

export default QuestionInput;
