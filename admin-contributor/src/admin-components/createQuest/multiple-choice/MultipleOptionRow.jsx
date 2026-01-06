import React, { useState } from "react";

function MultipleOptionRow() {
  const [question, setQuestion] = useState("");
  const [points, setPoints] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]); // A, B, C, D
  const [correctAnswers, setCorrectAnswers] = useState([]); // array of indexes

  const letters = ["A", "B", "C", "D"];

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (index) => {
    if (correctAnswers.includes(index)) {
      setCorrectAnswers(correctAnswers.filter((i) => i !== index));
    } else {
      setCorrectAnswers([...correctAnswers, index]);
    }
  };

  const handleCreate = () => {
    const data = {
      question,
      points,
      options,
      correctAnswers,
    };
    console.log("Created Multiple Choice Question:", data);
    alert("Question created! Check console for data.");

    // Reset
    setQuestion("");
    setPoints("");
    setOptions(["", "", "", ""]);
    setCorrectAnswers([]);
  };

  return (
    <div className="w-full  flex flex-col gap-4">
      {/* Question Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Write your question here
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
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
          value={points}
          onChange={(e) => setPoints(e.target.value)}
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
        {letters.map((letter, index) => (
          <div key={letter} className="relative">
            <input
              type="text"
              value={options[index]}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Enter option ${letter}...`}
              className="w-full border border-gray-300 rounded-lg px-14 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Checkbox + Letter inside input */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <input
                type="checkbox"
                checked={correctAnswers.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="font-semibold">{letter}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCreate}
          className="
    bg-gradient-to-r from-[#379564] to-[#22573b] text-white
    hover:from-[#2f7f55] hover:to-[#1b4530]
    px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer
  "
        >
          Create Question
        </button>
      </div>
    </div>
  );
}

export default MultipleOptionRow;
