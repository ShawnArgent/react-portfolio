import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Shawn Argent</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">About</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Projects</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}
export default NavBar;
