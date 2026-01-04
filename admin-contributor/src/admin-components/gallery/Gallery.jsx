import React from "react";

const galleryItems = [
  { id: 1, name: "Lion", image: "/images/lion.jpg" },
  { id: 2, name: "Tiger", image: "/images/tiger.jpg" },
  { id: 3, name: "Elephant", image: "/images/elephant.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
  { id: 4, name: "Eagle", image: "/images/eagle.jpg" },
  { id: 5, name: "Shark", image: "/images/shark.jpg" },
  { id: 6, name: "Frog", image: "/images/frog.jpg" },
];

function Gallery() {
  return (
    <div className="">
      <div
        className="
        grid gap-4
        grid-cols-2
        md:grid-cols-4
        lg:grid-cols-5
      "
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden
                       hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
              onError={(e) => {
                e.target.src = "/images/unknown.jpg";
              }}
            />

            {/* Name */}
            <div className="p-2 text-center">
              <p className="text-sm font-medium text-gray-700 truncate">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
