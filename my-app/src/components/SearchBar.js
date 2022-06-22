function SearchBar({ searchTerm, onChangeSearch }) {
  function handleChange(e) {
    onChangeSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <input
        className="prompt"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search State.."
      />
    </div>
  );
}

export default SearchBar;
