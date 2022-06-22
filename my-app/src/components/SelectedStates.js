import React from "react";
import DataCard from "./DataCard";

function SelectedStates({ selectedItem, onSelect }) {
  const selectedItemList = selectedItem.map((item) => {
    <DataCard key={item.id} card={item} onSelect={onSelect} />;
  });
  return <div>{DataCard}</div>;
}

export default SelectedStates;
