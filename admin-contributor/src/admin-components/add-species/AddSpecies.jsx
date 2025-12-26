import AddSpeciesImage from "./AddSpeciesImage";
import AddSpeciesInput from "./AddSpeciesInput";

function AddSpecies() {
  return (
    <>
      <div className="flex justify-center ">
        <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center ">
          {/* Input Image Upload */}|
          <AddSpeciesImage />
          {/* Other Input Fields */}
          <AddSpeciesInput />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#379564] to-[#22573b] text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSpecies;
