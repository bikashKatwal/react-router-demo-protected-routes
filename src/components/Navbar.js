import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Utils/auth";

function Navbar(props) {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/users" style={navLinkStyles}>
        Users
      </NavLink>
      <NavLink to="/profile" style={navLinkStyles}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          {" "}
          Login{" "}
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
