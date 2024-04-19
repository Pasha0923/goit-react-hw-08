// import { useDispatch } from "react-redux";
// import { apiRegisterUser } from "../../redux/auth/operations";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { Helmet } from "react-helmet-async";
const Registration = () => {
  // const dispatch = useDispatch();
  // const onRegister = (formData) => {
  //   console.log("formData: ", formData);
  //   dispatch(apiRegisterUser(formData));
  // };
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      {/* <h1>Registration page</h1> */}
      {/* Функцію onRegister передаємо
      пропсом в RegisterForm */}
      {/* <RegisterForm onRegister={onRegister} /> */}
    </div>
  );
};

export default Registration;
