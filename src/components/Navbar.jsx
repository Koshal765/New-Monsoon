import { useState } from "react";
import {  useNavigate } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top"
        style={{
          
          height: "80px",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-3 text-shadow-lg"
            to="/"
            style={{  }}
          >
            ☔ Monsoon Recipe Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="nav">
            <ul className="navbar-nav ms-auto fs-5 fw-semibold bg-warning bg-opacity-75 rounded-4 p-2 ">
              <li className="nav-item">
                <Link className="nav-link text-white"  
                 to="/"  
                 onClick={() => {
      const nav = document.getElementById("nav");
      if (nav && nav.classList.contains("show")) {
        nav.classList.remove("show"); // manually collapse
      }
    }} >
                  Home🏡
                </Link>
              </li>
              <li className="nav-item ">
                <button
                  className="nav-link text-white "  
                   data-bs-toggle="collapse"
                      data-bs-target="#nav"
                 
                  onClick={() => {
    navigate("/add-recipe"); // first navigate
    const nav = document.getElementById("nav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show"); // then collapse
    }
  }}
                >Upload Recipe⬆️
                
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/my-recipes" 
                  onClick={() => {
      const nav = document.getElementById("nav");
      if (nav && nav.classList.contains("show")) {
        nav.classList.remove("show"); // manually collapse
      }
    }}>
                  My Recipes
                </Link>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-link nav-link text-white"
                 onClick={() => {
    navigate("/login"); // first navigate
    const nav = document.getElementById("nav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show"); // then collapse
    }
  }}
                >
                 Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
