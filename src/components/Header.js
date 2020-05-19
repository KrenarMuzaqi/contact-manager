import React from "react";
import PropTypes from "prop-types";

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
              <a className="nav-link" href="/home">
                Home
              </a>
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
