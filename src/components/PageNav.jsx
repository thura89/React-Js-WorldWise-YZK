import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "../pages/Logo";
import { useAuth } from "../contexts/FakeAuthContext";
const PageNav = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };
  return (
    <nav className={style.nav}>
      <Link to={"/"}>
        <Logo />
      </Link>

      <ul>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <NavLink onClick={handleLogout} className={style.ctaLink}>
              Logout
            </NavLink>
          ) : (
            <NavLink to={"/login"} className={style.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
