import React, { useState } from "react";
import QuestionInput from "./QuestionInput";
import MultipleOptionRow from "./multiple-choice/MultipleOptionRow";
import Essay from "./essay/Essay";
import MatchingType from "./matching-type/MatchingType";
import TrueOrFalse from "./true-or-false/TrueOrFalse";

function Create() {
  const [selectedType, setSelectedType] = useState(""); // start empty

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        {/* QuestionInput with onChange */}
        <QuestionInput onSelectType={setSelectedType} />

        {/* Conditional Rendering: only show if type is selected */}
        {selectedType === "multiple" && <MultipleOptionRow />}
        {selectedType === "matching" && <MatchingType />}
        {selectedType === "essay" && <Essay />}
        {selectedType === "trueorfalse" && <TrueOrFalse />}
      </div>
    </div>
  );
}

export default Create;
