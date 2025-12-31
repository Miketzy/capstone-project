import React from "react";

function AddSpeciesInput() {
  return (
    <>
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Specific Name</label>
          <input
            type="text"
            placeholder="Enter Specific name of the Species"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Scientific Name</label>
          <input
            type="text"
            placeholder="Enter Scientific name of tthe species"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Common Name</label>
          <input
            type="text"
            placeholder="Enter common name of the species"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">Classification</label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select classification
            </option>
            <option value="mammal">Mammal</option>
            <option value="bird">Bird</option>
            <option value="reptile">Reptile</option>
            <option value="fish">Fish</option>
            <option value="amphibian">Amphibian</option>
          </select>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="mb-4 text-left w-full md:w-1/2">
          <label className="block text-gray-700 mb-2">
            Conservation Status
          </label>
          <input
            type="text"
            placeholder="Enter Conservation Status"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Mapping</label>
        <input
          type="text"
          placeholder="Enter locaiton of the species"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Full width textarea */}
      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Habitat</label>
        <textarea
          rows="4"
          placeholder="Enter the Habitat of the species"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Threats</label>
        <textarea
          rows="4"
          placeholder="Enter the Species Threats"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Conservation Effort</label>
        <textarea
          rows="4"
          placeholder="Enter The species Conservation Status"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-6 text-left">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          rows="4"
          placeholder="Enter the species description"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />
      </div>
    </>
  );
}

export default AddSpeciesInput;
