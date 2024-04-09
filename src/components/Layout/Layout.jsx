import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/login">
          Login
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/register">
          Register
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/contacts">
          Contacts
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
