import React, { useState } from "react";

const galleryItems = [
  { id: 1, name: "Lion", image: "/images/lion.jpg" },
  { id: 2, name: "Tiger", image: "/images/tiger.jpg" },
  { id: 3, name: "Elephant", image: "/images/elephant.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
  { id: 7, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 8, name: "Shark", image: "/images/shark.jpg" },
  { id: 9, name: "Frog", image: "/images/frog.jpg" },
  { id: 10, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 11, name: "Shark", image: "/images/shark.jpg" },
  { id: 12, name: "Frog", image: "/images/frog.jpg" },
];

function Gallery() {
  const [search, setSearch] = useState("");

  // Filter gallery by search input
  const filteredItems = galleryItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search animals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
    </div>
  );
}

export default Gallery;
