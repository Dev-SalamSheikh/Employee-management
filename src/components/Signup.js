import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signupUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="small-container"
    >
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button type="submit">Login</button>
          <p>
            Already have a account?
            <Link style={{ textDecoration: "none", marginLeft: "5px" }} to="/">
              Login Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
