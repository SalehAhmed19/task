import React, { useState } from "react";
import bg from "../../assets/img/bg.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { async } from "@firebase/util";

const Login = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [isError, setIsError] = useState("");
  console.log(email);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPassword.value;
    if (password !== confirmPass) {
      setIsError("Password dose not match!");
    } else {
      setIsError("");
    }
    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      navigate("/chart");
    }
    if (error) {
      setIsError(error.message);
    }
    if (loading) {
      <Loading />;
    }
  };
  return (
    <div>
      <h2 className="heading">Create account</h2>
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
              <div>
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input"
                />
              </div>
              {isError && <label className="label error">{isError}</label>}
              <div>
                <label className="label">Your Full Name</label>
                <input type="text" name="email" className="input" />
              </div>
              <div>
                <label className="label">Your Phone Number</label>
                <input type="text" name="email" className="input" />
              </div>
              <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name="check"
                id="check"
              />
              <span className="conditions">
                I read and agree Terms and Conditions
              </span>
              <input
                disabled={!agree}
                className="submit-button"
                type="submit"
                value="Create Account"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
