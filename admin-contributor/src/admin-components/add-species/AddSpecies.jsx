import AddSpeciesImage from "./AddSpeciesImage";
import AddSpeciesInput from "./AddSpeciesInput";

function AddSpecies() {
  return (
    <>
      <div className="flex justify-center ">
        <form className="  bg-white p-8 rounded-2xl shadow-lg w-full lg:max-w-2xl text-center">
          {/* Input Image Upload */}|
          <AddSpeciesImage />
          {/* Other Input Fields */}
          <AddSpeciesInput />
          {/* Submit Button */}
          {/* Create Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="
    bg-gradient-to-r from-[#379564] to-[#22573b] text-white
    hover:from-[#2f7f55] hover:to-[#1b4530]
    px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer
  "
            >
              Add Species
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSpecies;
