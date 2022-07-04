import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-0">
      <div className="container">
        <Link to="" className="navbar-brand">
          <div className="d-flex my-1">
            <figure className="d-inline-block m-0">
              <img src="./assets/logo.png" className="img-fluid" alt="" />
            </figure>
            <p className="d-inline-block text-white my-auto">&nbsp; Jasmeen</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-auto">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-link">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link">
                TODO
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
