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

        {/* Question */}
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

        {/* Question Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Select your question type
          </label>

          <div className="relative flex items-center">
            <div className="absolute left-3 text-gray-400">🖼️</div>

            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg pl-10 pr-32 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="" disabled>
                Select question type
              </option>
              <option value="multiple">Multiple Choice</option>
              <option value="essay">Essay</option>
              <option value="truefalse">True / False</option>
            </select>

            <span className="absolute right-4 text-sm font-medium text-gray-600">
              {questionType ? typeLabel[questionType] : ""}
            </span>
          </div>
        </div>

        {/* Points */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Points of this answer
          </label>
          <input
            type="number"
            min="0"
            placeholder="Enter points"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-700">
            Input options for this answer and select the correct answer
          </label>

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2"
            >
              {/* Correct checkbox */}
              <input type="checkbox" className="w-4 h-4" />

              {/* Option input */}
              <input
                type="text"
                placeholder={`Option ${item}`}
                className="flex-1 outline-none"
              />

              {/* Icons */}
              <div className="flex items-center gap-3 text-gray-500">
                <span className="cursor-pointer">✏️</span>
                <span className="cursor-pointer">⋮</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Create;
