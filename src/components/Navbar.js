import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjD47HYVkW33ET40bdF-bc72fEIJWVaEVqSg&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            Medicard
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Addpatient">
                  Add Patient
                </Link>
              </li>
            </ul>
            <Link classname="nav-link" to="/Signin" role="button">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
