import QuestionInput from "./QuestionInput";
import MultipleChoiceOptions from "./multiple-choice/MultipleChoiceOptions";

function Create() {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full bg-white rounded-xl shadow-md p-6">
        <QuestionInput />
        <MultipleChoiceOptions />
      </div>
    </div>
  );
}

export default Create;
