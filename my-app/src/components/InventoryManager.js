import { useState } from "react";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";

export default function InventoryManager() {
  // api_key: "6BE0B81C1D1C4903A6B85D63EFB236E4",
  const [product, setProduct] = useState("");
  const [zipCode, setZipCode] = useState("");

  fetch(
    `https://api.bluecartapi.com/request?api_key=6BE0B81C1D1C4903A6B85D63EFB236E4&type=search&search_term=${product}&sort_by=best_seller&customer_zipcode=${zipCode}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  function handleProductSearch(product, zipCode) {
    setProduct(product);
    setZipCode(zipCode);
  }

  return (
    <div>
      <NavBar />
      <SearchForm onSearch={handleProductSearch} />
    </div>
  );
}
