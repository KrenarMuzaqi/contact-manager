import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ branding }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" style={{ marginRight: "8px" }}></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-plus" style={{ marginRight: "8px" }}></i>
                Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i
                  className="fas fa-question"
                  style={{ marginRight: "8px" }}
                ></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//nese nuk i dergojm si "props" asgje ateher na e shfaq "My App" ne branding
//perndryshe na e shfaq ate qe ja dergojm si props
Header.defaultProps = {
  branding: "My App",
};

//"propTypes" e kontroll a po vjen "type" ashtu qysh
//e kemi caktu p.sh prej DB
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
