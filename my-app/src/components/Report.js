import React from "react";

function Report({ currState, selectedItem }) {
  // const costOfLiving = Math.floor(selectedItemList);
  const selectedItemList = selectedItem.map(
    (item) => Math.round(item.index - currState.index) / 10
  );

  const selectedState = selectedItem.map((item) => item.state);

  return (
    <h1 className="report" key={selectedItem.id}>
      Cost of Living of {selectedState[0]} is {selectedItemList}% higher than{" "}
      {currState.state}
    </h1>
  );
}

export default Report;
