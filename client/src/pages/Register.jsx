import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth", inputs);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          id=""
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          id=""
          placeholder="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
