import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#96b1f4", height: "10vh" }}
      >
        <div className="container">
          <a
            className="navbar-brand text-white ms-auto"
            href=""
            style={{ fontSize: "1.7rem", fontWeight: "bold" }}
          >
            USER 1
          </a>
          <a href="" className="text-white">
            <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
