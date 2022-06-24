import "./App.css";
import DataManager from "./components/DataManager";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import AboutApp from "./components/AboutApp";
import UserForm from "./components/UserForm";
// import { useState } from "react";

function App() {
  // const [isOpenForm, setIsOpenForm] = useState(false)
  // function openForm(e) {

  //   return (
  //     <div>
  //       <UserForm />
  //     </div>
  //   );
  // }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path="/">
          <DataManager />
        </Route>
        <Route path="/about_app">
          <AboutApp />
        </Route>
        <Route path="/user_form">
          <UserForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
