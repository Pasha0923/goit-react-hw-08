import { useDispatch } from "react-redux";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import { apiRegisterUser } from "../../redux/auth/operations";
const Registration = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    console.log("formData: ", formData);
    dispatch(apiRegisterUser(formData));
  };
  return (
    <div>
      <h1>Registration page</h1>
      {/* Функцію onRegister передаємо
      пропсом в RegisterForm */}
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default Registration;
