import React from "react";
import DataCard from "./DataCard";

function CurrentState({ selectedItem, onSelect }) {
  const selectedList = selectedItem.map((item) => {
    return <DataCard key={item.id} card={item} onSelect={onSelect} />;
  });
  return <div className="selected State Section">{selectedList}</div>;
}

export default CurrentState;
