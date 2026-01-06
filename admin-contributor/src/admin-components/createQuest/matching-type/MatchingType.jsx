import React, { useState } from "react";

function MatchingTypeCreator() {
  const [question, setQuestion] = useState("");
  const [rows, setRows] = useState([""]);
  const [columns, setColumns] = useState([""]);
  const [correctMatches, setCorrectMatches] = useState({});

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

  const handleCreate = () => {
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
    <div className="w-full flex flex-col gap-4 ">
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
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Rows (items to match):
        </label>
        {rows.map((row, index) => (
          <input
            key={index}
            value={row}
            onChange={(e) => handleRowChange(index, e.target.value)}
            placeholder={`Enter row ${index + 1}`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        ))}
        <button
          type="button"
          onClick={handleAddRow}
          className="text-blue-500 hover:underline w-fit"
        >
          + Add Row
        </button>
      </div>

      {/* Columns */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          Columns (possible matches):
        </label>
        {columns.map((col, index) => (
          <input
            key={index}
            value={col}
            onChange={(e) => handleColumnChange(index, e.target.value)}
            placeholder={`Enter column ${index + 1}`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        ))}
        <button
          type="button"
          onClick={handleAddColumn}
          className="text-blue-500 hover:underline w-fit"
        >
          + Add Column
        </button>
      </div>

      {/* Correct Matches */}
      <div className="flex flex-col gap-4">
        <label className="font-medium text-gray-700">
          Select correct match:
        </label>

        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-2"
          >
            {/* Row Label */}
            <span className="w-full lg:w-32 font-medium text-gray-800 truncate">
              {row || `Row ${rowIndex + 1}`}
            </span>

            {/* Column Select */}
            <select
              value={correctMatches[rowIndex] ?? ""}
              onChange={(e) =>
                handleSelectMatch(rowIndex, Number(e.target.value))
              }
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="" disabled>
                Select match
              </option>
              {columns.map((col, colIndex) => (
                <option key={colIndex} value={colIndex}>
                  {col || `Column ${colIndex + 1}`}
                </option>
              ))}
            </select>
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

export default MatchingTypeCreator;
