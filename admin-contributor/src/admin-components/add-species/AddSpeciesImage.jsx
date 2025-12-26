import React, { useRef, useState } from "react";

function AddSpeciesImage() {
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/300x200?text=Unknown+Image"
  );
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        Upload Image
      </label>

      {/* Image Preview */}
      <div
        className="w-64 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-500"
        onClick={handleImageClick}
      >
        <img
          src={preview}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}

export default AddSpeciesImage;
