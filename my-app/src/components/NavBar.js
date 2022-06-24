import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">Logo</li>
      <li className="nav-item">
        <NavLink to="/Contact" exact activeStyle={{ background: "lightgray" }}>
          Contact
        </NavLink>
      </li>
      <button className="btn-primary">Admin</button>
    </ul>
  );
};
export default Navbar;
