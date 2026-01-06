import React, { useState } from "react";
import QuestionInput from "./QuestionInput";

function Create() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-xl shadow-md p-6">
        <QuestionInput />
      </div>
    </div>
  );
}

export default Create;
