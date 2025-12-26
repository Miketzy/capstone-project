import React from "react";

function AddSpeciesImage() {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </>
  );
}

export default AddSpeciesImage;
