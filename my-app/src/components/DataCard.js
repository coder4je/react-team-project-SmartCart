import React from "react";

function DataCard({ card, onSelect, handleDelete }) {
  const { image, state, index, income } = card;
  // Income Element
  let frontUnit = Math.floor(income / 1000);
  let backUnit = income - frontUnit * 1000;

  return (
    <div
      className="stateCard"
      onClick={() => onSelect(card)}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        <img src={image} alt="state_image" />
      </div>
      <div className="State Name">
        <h3>{state}</h3>
      </div>
      <h4 className="cost living index">
        Cost Of Living Index: <strong>{index}</strong>
      </h4>
      <h4 className="median income">
        Median Income: <strong>{`$${frontUnit},${backUnit}`}</strong>
      </h4>
      <button
        className="btn-regular"
        style={{ borderRadius: "1rem" }}
        onClick={() => handleDelete(card)}
      >
        X
      </button>
    </div>
  );
}

export default DataCard;
