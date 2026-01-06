import React, { useState } from "react";

const options = [
  {
    id: 1,
    label: "Multiple Choice",
    value: "multiple",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
  },
  {
    id: 2,
    label: "True or False",
    value: "truefalse",
    image: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
  {
    id: 3,
    label: "Short Answer",
    value: "short",
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
  },
];

function Create() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl font-semibold mb-6">Create</h1>

        {/* Label */}
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Select your question Type
        </label>

        {/* Select Box */}
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
              <span className="text-gray-400">Select question type</span>
            )}
            <span>▼</span>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-6 h-6"
                  />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
