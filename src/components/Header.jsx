import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-title">Movies</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Watch List
              </a>
            </li>
            <li className="nav-item">
              <a href="#wacther">Watched</a>
            </li>
            <li className="nav-item add-item">
              <a href="#add">Add</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
