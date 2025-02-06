import { useState } from "react";
import Button from "../components/Button";
import "../styles/global.css";
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "../api/auth";

const Signup = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const onSignup = async (event) => {
    event.preventDefault();
    //Api call
    if (!userData.name || !userData.email || !userData.password) {
      return alert("All fields are required");
    }
    const newData = await SignUp(userData);
    if (newData) return alert("Signup Success");
    if (!newData) return alert("Error Signing Up");

    const data = await SignUp(userData);
    if (data) navigate("/login");
  };

  const onInputChange = (event) => {
    const fieldName = event.target.name;
    setUserData({ ...userData, [fieldName]: event.target.value });
  };

  return (
    <>
      <div className="authContainer">
        <h1>Sign Up</h1>
        <form className="authContainer" onSubmit={onSignup}>
          <input
            name="name"
            type="name"
            placeholder="Name"
            onChange={onInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={onInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onInputChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <p>
          Already have an account? <Link to="/Login">Log In</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
