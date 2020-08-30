import React from "react";
import "./Navbar.css";
import myPDF from "./images/ResumeGarima.pdf";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="conatiner">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="/">
                Portfolio
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      eaxct
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/contact"
                    >
                      Contact Me
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      href={myPDF}
                      download="Garima.pdf"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
