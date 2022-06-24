import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">ʙᴇᴛᴛᴇʀ sᴛᴀᴛᴇ</li>
      <li className="nav-item">
        <NavLink
          to="/about_app"
          exact
          activeStyle={{ background: "lightgray" }}
        >
          About This App
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user_form"
          exact
          activeStyle={{ background: "lightgray" }}
        >
          Admin
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
