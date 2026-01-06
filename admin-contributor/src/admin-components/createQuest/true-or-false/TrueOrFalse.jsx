import React from "react";

function TrueOrFalse({
  question,
  setQuestion,
  correctAnswer,
  setCorrectAnswer,
  onCreate,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-4 flex flex-col gap-4"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        True or False Question
      </h2>

      {/* Question */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Write your question
        </label>
        <textarea
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter true or false question..."
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Correct Answer */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Correct Answer
        </label>

        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="truefalse"
              value="true"
              checked={correctAnswer === true}
              onChange={() => setCorrectAnswer(true)}
              required
            />
            <span>True</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="truefalse"
              value="false"
              checked={correctAnswer === false}
              onChange={() => setCorrectAnswer(false)}
            />
            <span>False</span>
          </label>
        </div>
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

export default TrueOrFalse;
