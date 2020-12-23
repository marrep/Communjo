import React, { useState } from "react";
import { authMethods } from "../firebase/authMethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    // middle man between firebase and signup
    console.log("handleSignup");
    // calling signup from firebase server
    return authMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
  };

  const handleSignin = () => {
    //changed to handleSingin
    console.log("handleSignin!!!!");
    // made signup signin
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        inputs,
        setInputs,
        errors,
        handleSignin,
        handleSignout,
        token,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
