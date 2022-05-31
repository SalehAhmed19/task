import React, { useState } from "react";
import bg from "../../assets/img/bg.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  console.log(email);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    navigate("/chart");
    if (error) {
      setIsError(error.message);
    }
    if (loading) {
      <Loading />;
    }
  };
  return (
    <div>
      <h2 className="heading">Login</h2>
      <div className="container height-screen">
        <div className="form-container">
          <div className="img-container">
            <img className="img" src={bg} alt="" />
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <label className="label">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  onBlur={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>
              <div>
                <label className="label">Your Password</label>
                <input type="password" name="password" className="input" />
              </div>
              {isError}
              <input className="submit-button" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
