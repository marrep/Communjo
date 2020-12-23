import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../provider/AuthProvider";

const Signin = () => {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Signin
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={inputs.email}
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="password"
          value={inputs.password}
        />
        <button>signin</button>
        {errors.length > 0
          ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
          : null}
        <Link to="/signup">Don't have an account? Signup now!</Link>
      </form>
    </div>
  );
};

export default Signin;
