import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import InventoryManager from "./components/InventoryManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HI
        <NavBar />
      </header>
      <Home />
      <AboutUs />
      <InventoryManager />
    </div>
  );
}

export default App;
