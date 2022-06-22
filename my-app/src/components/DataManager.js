import { useState } from "react";

export default function DataManager() {
  fetch("http://localhost:3000/costAndIncome")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return;
}
