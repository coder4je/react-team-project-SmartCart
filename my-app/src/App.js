import "./App.css";
import DataManager from "./components/DataManager";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <DataManager />
        </Route>
      </Switch>
    </>
  );
}

export default App;
