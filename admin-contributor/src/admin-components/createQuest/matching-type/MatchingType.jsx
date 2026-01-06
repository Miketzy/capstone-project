import React, { useState } from "react";

function MatchingTypeQuestion() {
  const [rows, setRows] = useState(["Hello", "Thank you", "Hot", "Cold"]);
  const [columns, setColumns] = useState([
    "Chaud",
    "Bonjour",
    "Merci",
    "Froid",
  ]);
  const [answers, setAnswers] = useState({}); // { rowIndex: columnIndex }

  const handleSelect = (rowIndex, columnIndex) => {
    setAnswers((prev) => ({ ...prev, [rowIndex]: columnIndex }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected matches:", answers);
    alert("Matching submitted! Check console for details.");
  };

  return (
    <form className="w-full max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">
        Match the English word to the corresponding word in French
      </h2>

      <div className="grid grid-cols-[1fr_1fr] gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-2">
            {/* Row label */}
            <span className="w-24">{row}</span>

            {/* Column options */}
            <select
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={answers[rowIndex] ?? ""}
              onChange={(e) => handleSelect(rowIndex, parseInt(e.target.value))}
            >
              <option value="" disabled>
                Select match
              </option>
              {columns.map((col, colIndex) => (
                <option key={colIndex} value={colIndex}>
                  {col}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default MatchingTypeQuestion;
