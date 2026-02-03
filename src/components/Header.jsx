import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-title">Movies</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link">
                Watch List
              </a>
            </li>
            <li>
              <a href="#wacther" className="nav-link">
                Watched
              </a>
            </li>
            <li>
              <a href="#add" className="nav-link btn">
                Add
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
