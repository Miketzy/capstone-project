import React, { useState } from "react";

function MatchingTypeCreator() {
  const [question, setQuestion] = useState("");
  const [rows, setRows] = useState([""]);
  const [columns, setColumns] = useState([""]);
  const [correctMatches, setCorrectMatches] = useState({}); // { rowIndex: columnIndex }

  const handleRowChange = (index, value) => {
    const newRows = [...rows];
    newRows[index] = value;
    setRows(newRows);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  };

  const handleAddRow = () => setRows([...rows, ""]);
  const handleAddColumn = () => setColumns([...columns, ""]);

  const handleSelectMatch = (rowIndex, colIndex) => {
    setCorrectMatches({ ...correctMatches, [rowIndex]: colIndex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = {
      question,
      rows,
      columns,
      correctMatches,
    };
    console.log("Created Matching Question:", questionData);
    alert("Question created! Check console for data.");
  };

  return (
    <form
      className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      {/* Question Input */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Enter your question:
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your matching question..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Rows Input */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Rows (items to match):
        </label>
        {rows.map((row, index) => (
          <input
            key={index}
            type="text"
            value={row}
            onChange={(e) => handleRowChange(index, e.target.value)}
            placeholder={`Enter row ${index + 1}...`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button
          type="button"
          onClick={handleAddRow}
          className="mt-2 text-blue-500 hover:underline"
        >
          + Add Row
        </button>
      </div>

      {/* Columns Input */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Columns (possible matches):
        </label>
        {columns.map((col, index) => (
          <input
            key={index}
            type="text"
            value={col}
            onChange={(e) => handleColumnChange(index, e.target.value)}
            placeholder={`Enter column ${index + 1}...`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button
          type="button"
          onClick={handleAddColumn}
          className="mt-2 text-blue-500 hover:underline"
        >
          + Add Column
        </button>
      </div>

      {/* Correct Answer Selection */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Select correct match for each row:
        </label>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-2">
            <span className="w-24">{row}</span>
            <select
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={correctMatches[rowIndex] ?? ""}
              onChange={(e) =>
                handleSelectMatch(rowIndex, parseInt(e.target.value))
              }
            >
              <option value="" disabled>
                Select correct match
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

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="
    bg-gradient-to-r from-[#379564] to-[#22573b] text-white
    hover:from-[#2f7f55] hover:to-[#1b4530]
    px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer
  "
        >
          Create Question
        </button>
      </div>
    </form>
  );
}

export default MatchingTypeCreator;
