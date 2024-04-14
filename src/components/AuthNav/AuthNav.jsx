import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.authLink, {
    [css.active]: isActive,
  });
const AuthNav = () => {
  return (
    <div>
      <div className={css.authNav}>
        <NavLink className={getNavLinkClassNames} to="/login">
          Login
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};
export default AuthNav;
