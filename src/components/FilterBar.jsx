function FilterBar({ categories, setCategory, setSortOrder }) {
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}

export default FilterBar;