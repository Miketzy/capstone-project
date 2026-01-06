import React, { useState } from "react";

const quizTypes = [
  {
    value: "multiple",
    label: "Multiple Choice",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
  },
  {
    value: "matching",
    label: "Matching Type",
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063826.png",
  },
  {
    value: "essay",
    label: "Essay",
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
  },
  {
    value: "trueorfalse",
    label: "True or False",
    image: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
];

function QuestionInput() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold mb-6">Create</h1>

        {/* Label */}
        <label className="text-sm font-medium text-gray-700  block">
          Select your question Type
        </label>

        {/* Custom Select */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between hover:border-blue-500"
          >
            {selected ? (
              <div className="flex items-center gap-3">
                <img
                  src={selected.image}
                  alt={selected.label}
                  className="w-6 h-6"
                />
                <span>{selected.label}</span>
              </div>
            ) : (
              <span className="text-gray-400">-- Select type --</span>
            )}
            <span className="text-gray-500">▼</span>
          </div>

          {/* Dropdown options */}
          {open && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg">
              {quizTypes.map((type) => (
                <div
                  key={type.value}
                  onClick={() => {
                    setSelected(type);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <img src={type.image} alt={type.label} className="w-6 h-6" />
                  <span>{type.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionInput;
