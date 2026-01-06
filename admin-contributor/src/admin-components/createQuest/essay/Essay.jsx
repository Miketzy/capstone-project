import React from "react";

function Essay({ question, setQuestion, answer, setAnswer, onCreate }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-800">Essay Question</h2>

      {/* Question */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Write your question
        </label>
        <textarea
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter essay question here..."
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Expected Answer */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Expected Answer
        </label>
        <textarea
          rows={4}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter guide/expected answer..."
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Create Button */}
      <div className="flex justify-center">
        <button
          onClick={onCreate}
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

export default Essay;
