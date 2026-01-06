import QuestionInput from "./QuestionInput";
import MultipleChoiceOptions from "./multiple-choice/MultipleOptionRow";

function Create() {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <QuestionInput />
        <MultipleChoiceOptions />
      </div>
    </div>
  );
}

export default Create;
