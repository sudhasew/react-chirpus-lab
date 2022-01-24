import "./Header.css";
export function Header() {
  return (
    <div className="header-component">
      <h1>
        <a href="#" className="company-name">
          chirpus inc.
        </a>
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-item link">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="nav-item link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-item link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="accent-link1 link">
              Hire Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
