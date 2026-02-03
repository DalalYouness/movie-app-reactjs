import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-title">Movies</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <NavLink to={"/"} className="nav-link">
                Watch List
              </NavLink>
            </li>
            <li>
              <NavLink to={"/watched"} className="nav-link">
                Watched
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add"} className="nav-link btn">
                Add
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
