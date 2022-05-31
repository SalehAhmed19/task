import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../../firebase.init";
import "./Navbar.css";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div className="nav">
      <button className="btn" onClick={handleSignOut}>
        Sign out <FaSignOutAlt className="p" />
      </button>
    </div>
  );
};

export default Navbar;
