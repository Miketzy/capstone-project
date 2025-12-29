import React from "react";

function AddSpeciesInput() {
  return (
    <>
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 1</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 2</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 3</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 4</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 5</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Field 6</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Full width textarea */}
      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          rows="4"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
    </>
  );
}

export default AddSpeciesInput;
