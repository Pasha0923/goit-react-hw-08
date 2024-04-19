import { Formik, ErrorMessage, Field, Form } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../../redux/auth/operations";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { useState } from "react";
const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!")
    .required("Required!"),
  email: Yup.string().required("Required!").email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(null);
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSubmit = (formData, actions) => {
    dispatch(apiRegisterUser(formData)); // Викликаємо сервіс реєстрації і передаємо йому дані з форми)
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Register</h2>
        <label className={css.label}>
          <span className={css.labelText}>Name: </span>
          <Field
            className={css.formInput}
            placeholder="Please enter name"
            type="text"
            name="name"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Email: </span>
          <Field
            className={css.formInput}
            placeholder="Please enter email"
            type="text"
            name="email"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Password: </span>
          <Field
            className={css.formInput}
            placeholder="Please enter your password"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
          />
          {isPasswordVisible ? (
            <PiEyeBold
              className={css.passwordIcon}
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <PiEyeClosedBold
              className={css.passwordIcon}
              onClick={handleTogglePasswordVisibility}
            />
          )}

          <ErrorMessage
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </label>
        <button
          className={css.btnAdd}
          type="submit"
          aria-label=""
          title="Click to register user"
        >
          Sign up <IoPersonAddSharp />
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
