function Filters({
  filterClassification,
  setFilterClassification,
  filterCategory,
  setFilterCategory,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <select
        value={filterClassification}
        onChange={(e) => setFilterClassification(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option>All Species</option>
        <option>Mammal</option>
        <option>Bird</option>
        <option>Reptile</option>
        <option>Fish</option>
        <option>Amphibian</option>
      </select>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option>All Categories</option>
        <option>Carnivore</option>
        <option>Herbivore</option>
        <option>Predator</option>
        <option>Insectivore</option>
      </select>

      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option>All Statuses</option>
        <option>Least Concern</option>
        <option>Near Threatened</option>
        <option>Vulnerable</option>
        <option>Endangered</option>
      </select>
    </div>
  );
}

export default Filters;
