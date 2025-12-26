import React, { useState } from "react";
import AddSpeciesImage from "./AddSpeciesImage";

function AddSpecies() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // optional, for later use
    }
  };
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
