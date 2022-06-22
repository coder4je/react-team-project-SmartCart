import { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import SelectedStates from "./SelectedStates";
import SearchBar from "./SearchBar";

function DataManager() {
  const [stateData, setStateDate] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/costAndIncome")
      .then((response) => response.json())
      .then((data) => setStateDate(data));
  }, []);

  function handleMoveToSelectedState(selectedState) {
    const foundIndex = selectedItem.findIndex(
      (item) => item.id === selectedState.id
    );
    if (foundIndex < 0) {
      setSelectedItem([...selectedItem, selectedState]);
    } else {
      alert("It's already selected!!");
    }
  }

  function handleRemoveFromSelectedState(selectedState) {
    const updatedItem = selectedItem.filter(
      (item) => item.id !== selectedState.id
    );
    setSelectedItem(updatedItem);
  }

  const cardDisplay = stateData.filter((data) =>
    data.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      </div>
      <div className="mainDisplay">
        <CardCollection
          stateData={cardDisplay}
          onSelect={handleMoveToSelectedState}
        />
      </div>
      <hr />
      <div className="selectedStates">
        <SelectedStates
          selectedItem={selectedItem}
          onSelect={handleRemoveFromSelectedState}
        />
      </div>
    </>
  );
}

export default DataManager;
