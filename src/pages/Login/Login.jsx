import LoginForm from "../../components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* <h1>Login page</h1> */}
      <LoginForm />
    </div>
  );
};

export default Login;
