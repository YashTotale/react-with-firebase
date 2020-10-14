import React from "react";
import Header from "./Header";
import "./App.css";
import "./firebase/config";
import "./pages/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
