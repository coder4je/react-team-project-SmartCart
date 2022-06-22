import React from "react";

function DataCard({ card, onSelect }) {
  const { image, state, index, income } = card;

  function handleClick(e) {
    onSelect(e.target.value);
  }

  return (
    <div className="dataGrid" onClick={handleClick}>
      <div className="image">
        <img src={image} alt="state_image" />
      </div>
      <div className="State Name">
        <h3>{state}</h3>
      </div>
      <div className="details">
        <div className="cost living index">Cost Of Living Index: {index}</div>
        <div className="median income">Median Income: {income}</div>
      </div>
    </div>
  );
}

export default DataCard;
