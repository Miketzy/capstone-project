import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import MultipleChoiceOptions from "./multiple-chice/MultipleChoiceOptions";

function Create() {
  const [questionType, setQuestionType] = useState("");

  const [options, setOptions] = useState([
    { id: 1, text: "", editable: true, correct: false },
    { id: 2, text: "", editable: false, correct: false },
    { id: 3, text: "", editable: false, correct: false },
    { id: 4, text: "", editable: false, correct: false },
  ]);

  const handleEdit = (id) => {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, editable: true } : opt
      )
    );
  };

  const handleChange = (id, value) => {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, text: value } : opt
      )
    );
  };

  const handleCorrect = (id) => {
    setOptions((prev) =>
      prev.map((opt) => ({
        ...opt,
        correct: opt.id === id,
      }))
    );
  };

  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold">Create Question</h2>

        {/* Select Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Select your question type
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="w-full border border-gray-300 rou
