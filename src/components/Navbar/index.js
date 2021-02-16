import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Stardew Valley Guide
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/pricing"
              className={
                window.location.pathname === "/pricing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className={window.location.pathname === "/map" ? "nav-link active" : "nav-link"}
            >
              Map
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/calender"
              className={window.location.pathname === "/calender" ? "nav-link active" : "nav-link"}
            >
              Calender
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
