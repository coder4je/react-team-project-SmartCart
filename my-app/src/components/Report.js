import React from "react";

function Report({ currState, selectedItem }) {
  const costOfLiving = Math.floor(selectedItem.index - currState.index);
  console.log(selectedItem.index);
  return (
    <h1 className="report" key={selectedItem.id}>
      Cost of Living of {selectedItem.state} is {costOfLiving}% higher than{" "}
      {currState.state}
    </h1>
  );
}

export default Report;
