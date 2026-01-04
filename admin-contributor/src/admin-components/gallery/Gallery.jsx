import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GalleryGrid from "./GalleryGrid";

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

  const filteredItems = galleryItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Gallery */}
      <GalleryGrid items={filteredItems} />
    </>
  );
}

export default Gallery;
