import React from "react";
import DataCard from "./DataCard";

function StatesToCompare({ selectedItem, onSelect, handleDelete }) {
  const selectedList = selectedItem.map((item) => {
    return (
      <DataCard
        key={item.id}
        card={item}
        onSelect={onSelect}
        handleDelete={handleDelete}
      />
    );
  });
  return <div className="states-to-compare">{selectedList}</div>;
}

export default StatesToCompare;
