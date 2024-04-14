import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
// import { Button } from "@mui/material";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { Button } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogout = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.div}>
      <p className={css.text}>Welcome, {user.name}</p>
      <Button variant="contained" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
