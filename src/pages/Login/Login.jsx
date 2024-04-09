import { useDispatch } from "react-redux";

import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  // const dispatch = useDispatch();
  const onLogin = (formData) => {
    console.log("formData: ", formData);
    // dispatch(apiRegisterUser(formData));
  };
  return (
    <div>
      <h1>Login page</h1>
      {/* Функцію onLogin передаємо
      пропсом в LoginForm */}
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
