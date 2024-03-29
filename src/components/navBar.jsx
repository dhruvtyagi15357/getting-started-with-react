import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.darkTheme ? 'dark' : 'light'} bg-${props.darkTheme ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/about'}>
                  About
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleTheme} />
              <label className={`form-check-label text-${props.darkTheme ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                Toggle theme
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'TextUtils',
};
