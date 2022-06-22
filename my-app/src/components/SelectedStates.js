import React from "react";
import DataCard from "./DataCard";

function SelectedStates({ selectedItem, onSelect }) {
  const selectedItemList = selectedItem.map((item) => {
    return <DataCard key={item.id} card={item} onSelect={onSelect} />;
  });
  return <div className="selected State Section">{selectedItemList}</div>;
}

export default SelectedStates;
