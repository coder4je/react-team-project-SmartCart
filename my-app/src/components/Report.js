import React from "react";

function Report({ currState, selectedItem }) {
  // Cost of Living Calculation
  const selectedItemList = selectedItem.map((item) =>
    Math.round(item.index - currState.index)
  );
  const absSelectedItem = Math.abs(selectedItemList[0]);

  // Median Income Calculation
  const incomeToCompare = selectedItem.map((item) =>
    Math.floor(item.income - currState.income)
  );
  const absIncome = Math.abs(incomeToCompare[0]);
  const percOfDiff = Math.round((absIncome / currState.income) * 100);

  // State Name
  const selectedState = selectedItem.map((item) => item.state);

  return (
    <div className="report">
      <h1>
        <strong>"</strong>
        Cost of Living of {selectedState[0]} is{" "}
        <strong style={{ color: selectedItemList[0] < 0 ? "red" : "blur" }}>
          {absSelectedItem}
        </strong>
        % <strong>{selectedItemList[0] > 0 ? "higher" : "lower"}</strong> than{" "}
        {currState.state}
        <strong>"</strong>
      </h1>
      <hr />
      <h1>
        <strong>"</strong>
        Median Income of {selectedState[0]} is{" "}
        <strong style={{ color: incomeToCompare[0] < 0 ? "red" : "blur" }}>
          {percOfDiff}
        </strong>
        % <strong>{incomeToCompare[0] > 0 ? "higher" : "lower"}</strong> than{" "}
        {currState.state}
        <strong>"</strong>
      </h1>
    </div>
  );
}

export default Report;
