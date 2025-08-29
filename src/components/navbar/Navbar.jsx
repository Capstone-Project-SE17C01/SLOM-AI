import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = ({ notifyMsg }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="signlang_navbar  gradient__bg">
      <div className="singlang_navlinks">
        <div className="signlang_navlinks_logo">
          <a href="/">
            <h1
              className="gradient__text"
              style={{ fontWeight: 800, letterSpacing: "2px" }}
            >
              SLOM
            </h1>
          </a>
        </div>

        <div className="signlang_navlinks_container">
          <p>
            <Link to="/">Detect</Link>
          </p>
        </div>

        <div className="signlang_auth-data" />
      </div>

      <div className="signlang__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="signlang__navbar-menu_container scale-up-center">
            <div className="signlang__navbar-menu_container-links">
              <p>
                <Link to="/">Detect</Link>
              </p>
            </div>

            <div className="signlang__navbar-menu_container-links-authdata" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
