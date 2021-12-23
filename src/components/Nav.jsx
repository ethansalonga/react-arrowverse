import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav__row">
        <figure>
          <img
            src={Logo}
            className="logo"
            title="Jeremy Wilson &amp; Associates"
          ></img>
        </figure>
        <div className="nav__links">
          <Link to="/" className="nav__link link__hover-effect">
            Arrow
          </Link>
          <Link to="/search" className="nav__link link__hover-effect">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
