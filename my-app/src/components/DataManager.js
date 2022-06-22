import { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import SelectedStates from "./SelectedStates";

function DataManager() {
  const [stateData, setStateDate] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/costAndIncome")
      .then((response) => response.json())
      .then((data) => setStateDate(data));
  }, []);

  function handleMoveToSelectedState(selectedItem) {
    setSelectedItem(selectedItem);
  }

  function handleRemoveFromSelectedState(selectedState) {
    const updatedItem = selectedItem.filter(
      (item) => item.id !== selectedItem.id
    );
    setSelectedItem([...selectedItem, updatedItem]);
  }

  return (
    <div>
      <CardCollection
        stateData={stateData}
        onSelect={handleMoveToSelectedState}
      />
      <div className="divider"></div>
      <SelectedStates
        selectedItem={selectedItem}
        onSelect={handleRemoveFromSelectedState}
      />
    </div>
  );
}

export default DataManager;
