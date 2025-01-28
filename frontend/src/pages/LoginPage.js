import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {AuthContext} from "../context/AuthContext.js"
import Api from "../axiosconfig";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // Obj["awdiz"]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!userData.email || !userData.password) {
        toast.error("All fields are mandatory.");
        return;
      }
  
      const response = await Api.post("/auth/login", userData);
  
      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.userData });
        setUserData({ email: "", password: "" });
        router("/");
        toast.success(response.data.message);
      } else {
        toast.error(typeof response.data.error === "string" ? response.data.error : "Login failed.");
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error || "An error occurred.";
        toast.error(typeof errorMessage === "string" ? errorMessage : JSON.stringify(errorMessage));
      } else if (error.request) {
        toast.error("Network error: Unable to reach the server.");
      } else {
        toast.error("An unexpected error occurred.");
      }
      console.error(error);
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email : </label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={userData.email}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={userData.password}
        />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
      <button onClick={() => router("/register")}>Register ?</button>
      <button onClick={() => router("/register-admin")}>
        Admin Register ?
      </button>
      <button onClick={() => router("/login-admin")}>Admin Login ?</button>
    </div>
  );
};

export default Login;