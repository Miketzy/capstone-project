import React, { useState } from "react";

function Create() {
  const [questionType, setQuestionType] = useState("");

  const typeLabel = {
    multiple: "Multiple Choice",
    essay: "Essay",
    truefalse: "True / False",
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold">Create Question</h2>

        {/* Question Input */}
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

        {/* Question Type Select */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Select your question type
          </label>

          <div className="relative flex items-center">
            {/* Icon (image placeholder) */}
            <div className="absolute left-3 text-gray-400">🖼️</div>

            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg pl-10 pr-32 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select question type
              </option>
              <option value="multiple">Multiple Choice</option>
              <option value="essay">Essay</option>
              <option value="truefalse">True / False</option>
            </select>

            {/* Right side text */}
            <span className="absolute right-4 text-sm font-medium text-gray-600">
              {questionType ? typeLabel[questionType] : ""}
            </span>
          </div>
        </div>

        {/* Points Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Points of this answer
          </label>
          <input
            type="number"
            min="0"
            placeholder="Enter points"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Create;
