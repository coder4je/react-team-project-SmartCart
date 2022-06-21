import { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [searchZipCode, setSearchZipCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchProduct, searchZipCode);
  }

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <input
        type="text"
        id="productSearch"
        placeholder="search for product"
        onChange={(e) => setSearchProduct(e.target.value)}
        value={searchProduct}
      />
      <input
        type="text"
        id="zipCodeSearch"
        placeholder="search for Zip code"
        onChange={(e) => setSearchZipCode(e.target.value)}
        value={searchZipCode}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;
