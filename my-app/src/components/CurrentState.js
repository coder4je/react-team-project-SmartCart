import React from "react";
import DataCard from "./DataCard";

function CurrentState({ selectedItem, onSelect }) {
  return (
    <div className="selected State Section">
      <DataCard key={selectedItem.id} card={selectedItem} onSelect={onSelect} />
    </div>
  );
}

export default CurrentState;
