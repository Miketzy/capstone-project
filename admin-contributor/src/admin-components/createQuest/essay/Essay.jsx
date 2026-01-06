import React from "react";

function Essay({ question, setQuestion, answer, setAnswer, onCreate }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    onCreate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4"
    >
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
          Expected Answer (Teacher Only)
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

      {/* Submit */}
      <button
        type="submit"
        className="w-fit bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Create Question
      </button>
    </form>
  );
}

export default Essay;
