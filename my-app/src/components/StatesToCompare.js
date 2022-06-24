import React from "react";
import DataCard from "./DataCard";

function StatesToCompare({ selectedItem, onSelect }) {
  const selectedList = selectedItem.map((item) => {
    return <DataCard key={item.id} card={item} onSelect={onSelect} />;
  });
  return <div className="states-to-compare">{selectedList}</div>;
}

export default StatesToCompare;
