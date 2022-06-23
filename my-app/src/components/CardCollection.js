import React from "react";
import DataCard from "./DataCard";

function CardCollection({ stateData, onSelect }) {
  const dataDetails = stateData.map((item) => {
    return <DataCard key={item.id} card={item} onSelect={onSelect} />;
  });
  return <div className="stateCards">{dataDetails}</div>;
}

export default CardCollection
