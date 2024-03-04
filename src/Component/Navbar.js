import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Image/bg remove.jpeg";
import { FiAlignRight } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container">
          <div className="logo w-25">
            <img src={logo} alt="logo" height={48} />
          </div>
          <div className={`nav-elements d-md-block d-none`}>
            <ul class="d-flex list-inline">
              <li class="mx-md-5 mx-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="mx-md-5 mx-3">
                <NavLink to="/about">About</NavLink>
              </li>
              <li class="mx-md-5 mx-3">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        <button
          class="btn d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FiAlignRight />
        </button>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-body">
          <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
            <div className={`nav-elements`}>
              <ul class="list-unstyled">
                <li class="my-3">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="my-3">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li class="my-3">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
