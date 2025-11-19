import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm m-0 w-100 py-3">
      <div className="container-fluid m-0 p-2">

        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/home">
          <span className="fs-3 fw-bold">
            Company<span className="text-dark">Directory</span>
          </span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          
          {/* Left Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/companies">Companies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#!">About Us</a></li>
                <li><a className="dropdown-item" href="#!">Support</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">FAQs</a></li>
              </ul>
            </li>
          </ul>
         
          {/* Login Button */}
          <button className="btn btn-primary px-4">Login</button>

        </div>
      </div>
    </nav>
  );
}
