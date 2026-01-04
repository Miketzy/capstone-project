import React from "react";

function GalleryImage({ items }) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
              onError={(e) => {
                e.target.src = "/images/unknown.jpg";
              }}
            />
            <div className="p-2 text-center">
              <p className="text-sm font-medium text-gray-700 truncate">
                {item.name}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No results found.
        </p>
      )}
    </div>
  );
}

export default GalleryImage;
