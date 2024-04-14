import { useDispatch } from "react-redux";

import LoginForm from "../../components/LoginForm/LoginForm";
import { apiLoginUser } from "../../redux/auth/operations";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    console.log("formData: ", formData);
    dispatch(apiLoginUser(formData));
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* <h1>Login page</h1> */}
      {/* Функцію onLogin передаємо
      пропсом в LoginForm */}
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
