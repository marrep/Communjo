import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";

function App() {
  const handleSignup = useContext(firebaseAuth);
  console.log(handleSignup);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {localStorage.getItem("token") === null ? <Signin /> : <Home />}
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
