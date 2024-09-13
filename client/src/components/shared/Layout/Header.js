import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    window.location.reload();
    navigate("/");

  };

  // login handler
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <Link to="/">
            <div className="brand">
              <img className="icon" src="./assets/images/icon.png" alt="icon" />
              <h3 className="b-name">Blood Bank</h3>
            </div>
          </Link>
          {(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register") && !user ? (
            // If user is on "/" path and not logged in
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <button className="login" onClick={handleLogin}>
                  Login
                </button>
              </li>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  Benefits
                </Link>
              </li>
            </ul>
          ) : (
            // If user is logged in
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <p className="nav-link">
                  <BiUserCircle /> Welcome{" "}
                  {user?.name || user?.hospitalName || user?.organisationName}
                  &nbsp;
                  <span className="badge bg-secondary">{user?.role}</span>
                </p>
              </li>
              {(location.pathname === "/home" && user?.role !== "donar") ||
                location.pathname === "/donar" ||
                location.pathname === "/hospital" ? (
                <li className="nav-item mx-3">
                  <Link to="/analytics" className="nav-link">
                    Analytics
                  </Link>
                </li>
              ) : (
                <li className="nav-item mx-3">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
              )}
              <li className="nav-item mx-3">
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
