import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signinUserWithEmailAndPassword(email, password);
      navigate("/home");
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
        <h1>Log in to your Account</h1>
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
            No Account? Create new one{" "}
            <Link style={{ textDecoration: "none" }} to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
