import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">

        {/* Project Name */}
        <div className="mb-4">
          <h3 className="fw-bold">Company Directory</h3>
        </div>

        <div className="row">

          {/* Column 1: Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: info@companydirectory.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
            <li>
            <Link to="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li>
            <Link to="/companies" className="text-white text-decoration-none">Companies</Link>
            </li>
            <li>
            <Link to="/jobs" className="text-white text-decoration-none">Jobs</Link>
            </li>
            <li>
            <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            </li>
        </ul>
        </div>

          {/* Column 3: Email Form */}
          <div className="col-md-4 mb-4">
            <h5>Send us a message</h5>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="text-center">
          &copy; {new Date().getFullYear()} Company Directory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
