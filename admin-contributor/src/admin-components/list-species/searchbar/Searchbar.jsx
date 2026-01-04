function Searchbar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search species..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-64 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
    />
  );
}

export default Searchbar;
