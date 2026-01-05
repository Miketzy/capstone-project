import React from "react";

function MultipleOptionRow({
  option,
  handleChange,
  handleEdit,
  handleCorrect,
}) {
  return (
    <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2">
      {/* Correct answer radio */}
      <input
        type="radio"
        checked={option.correct}
        onChange={() => handleCorrect(option.id)}
      />

      {/* Option input */}
      <input
        type="text"
        value={option.text}
        onChange={(e) => handleChange(option.id, e.target.value)}
        disabled={!option.editable}
        placeholder={`Option ${option.id}`}
        className={`flex-1 outline-none bg-transparent ${
          !option.editable ? "cursor-not-allowed text-gray-400" : ""
        }`}
      />

      {/* Icons */}
      <div className="flex items-center gap-3 text-gray-500">
        <button
          type="button"
          onClick={() => handleEdit(option.id)}
          className="hover:text-green-600 cursor-pointer"
        >
          ✏️
        </button>
        <span className="cursor-pointer">⋮</span>
      </div>
    </div>
  );
}

export default MultipleOptionRow;
