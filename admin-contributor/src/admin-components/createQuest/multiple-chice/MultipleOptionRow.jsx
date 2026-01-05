import MultipleOptionRow from "./MultipleOptionRow";

function MultipleChoiceOptions({
  options,
  handleChange,
  handleEdit,
  handleCorrect,
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-700">
        Input options for this answer and select the correct answer
      </label>

      {options.map((option) => (
        <MultipleOptionRow
          key={option.id}
          option={option}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleCorrect={handleCorrect}
        />
      ))}
    </div>
  );
}

export default MultipleChoiceOptions;
