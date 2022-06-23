import React from "react";
import { NavLink } from "react-router-dom";

// import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a href="">logo</a>{" "}
      </li>
      <li className="nav-item">
        <a href="">Home</a>{" "}
      </li>
      <li className="nav-item">
        <a href="">Contact</a>
      </li>
      <button className="btn-primary">Button</button>
    </ul>
  );
};
export default Navbar;
