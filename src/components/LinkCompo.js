import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkCompo.css";

function LinkCompo() {
  return (
    <div className="navbar-comp">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default LinkCompo;
