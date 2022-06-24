import { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import StatesToCompare from "./StatesToCompare";
import SearchBar from "./SearchBar";
import Report from "./Report";
import AboutApp from "./AboutApp";
import UserForm from "./UserForm";

function DataManager() {
  const [stateData, setStateData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currState, setCurrState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/costAndIncome")
      .then((response) => response.json())
      .then((data) => setStateData(data));
  }, []);

  function handleMoveToSelectedState(selectedState) {
    const foundIndex = selectedItem.findIndex(
      (item) => item.id === selectedState.id
    );

    if (foundIndex < 0 && selectedItem.length <= 1) {
      setSelectedItem([...selectedItem, selectedState]);
      setCurrState(selectedState);
    } else {
      alert("Already on the list or the list is full");
    }
  }

  function handleRemoveFromSelected(selectedState) {
    const updatedItem = selectedItem.filter(
      (item) => item.id !== selectedState.id
    );
    setSelectedItem(updatedItem);
  }

  function handleClick() {
    handleRemoveFromSelected(setSelectedItem([]));
  }

  function handleDeleteFromServer(clickedItem) {
    fetch(`http://localhost:3000/costAndIncome/${clickedItem.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("Deleted!!"));
  }

  const cardDisplay = stateData.filter((data) =>
    data.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <span className="search">
        <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      </span>

      <div className="selectedContainer">
        <div className="selectedStates">
          {selectedItem ? (
            <StatesToCompare
              selectedItem={selectedItem}
              onSelect={handleRemoveFromSelected}
            />
          ) : null}
        </div>

        <div className="report" onClick={(e) => handleClick(e.target)}>
          {selectedItem.length === 2 ? (
            <Report currState={currState} selectedItem={selectedItem} />
          ) : null}
        </div>
      </div>
      <div className="stateContainer">
        <CardCollection
          stateData={cardDisplay}
          onSelect={handleMoveToSelectedState}
          handleDelete={handleDeleteFromServer}
        />
      </div>
      <div className="About-app">
        <AboutApp />
      </div>
      <span className="user-form">
        <UserForm stateData={stateData} />
      </span>
    </>
  );
}

export default DataManager;
