import { useEffect, useState } from "react";
import CardCollection from "./CardCollection";
import CurrentState from "./CurrentState";
import SearchBar from "./SearchBar";
// import StateToCompare from "./StateToCompare";

function DataManager() {
  const [stateData, setStateData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const lenOfSelectedItem = selectedItem.length;
  console.log(lenOfSelectedItem);

  useEffect(() => {
    fetch("http://localhost:3000/costAndIncome")
      .then((response) => response.json())
      .then((data) => setStateData(data));
  }, []);

  function handleMoveToSelectedState(selectedState) {
    // const foundIndex = selectedItem.findIndex(
    //   (item) => item.id === selectedState.id
    // );
    const updatedState = stateData.filter(
      (item) => item.id !== selectedState.id
    );
    setStateData(updatedState);

    if (selectedItem.length > 2) {
      selectedItem = null;
    } else {
      setSelectedItem([selectedState]);
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

  // console.log(selectedItem);
  // const curStateBox = (
  //   <div>
  //     <CurrentState
  //       selectedItem={selectedItem}
  //       onSelect={handleRemoveFromSelectedState}
  //     />
  //   </div>
  // );
  // const stateToCompareBox = (
  //   <div>
  //     <StateToCompare
  //       selectedItem={selectedItem}
  //       onSelect={handleRemoveFromSelectedState}
  //     />
  //   </div>
  // );

  return (
    <>
      <div>
        <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      </div>
      <div className="selectedContainer">
        {selectedItem ? <CurrentState selectedItem={selectedItem} /> : null}
      </div>
      <div className="stateContainer">
        <CardCollection
          stateData={cardDisplay}
          onSelect={handleMoveToSelectedState}
        />
      </div>
    </>
  );
}

export default DataManager;
