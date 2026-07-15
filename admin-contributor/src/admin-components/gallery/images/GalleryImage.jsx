import React, { useState } from "react";

function GalleryImage({ items = [] }) {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.length > 0 ? (
        items.map((item) => <GalleryCard key={item.id} item={item} />)
      ) : (
        <p className="col-span-full text-center text-gray-500 py-8">
          No results found.
        </p>
      )}
    </div>
  );
}

function GalleryCard({ item }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      title={item.name}
    >
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        {!loaded && !errored && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <img
          src={errored ? "/images/unknown.jpg" : item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (!errored) setErrored(true);
            setLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-2 text-center">
        <p className="text-sm font-medium text-gray-700 truncate">
          {item.name}
        </p>
      </div>
    </div>
  );
}

export default GalleryImage;