import { Formik, ErrorMessage, Field, Form } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const UserLoginSchema = Yup.object().shape({
  email: Yup.string().required("Required!").email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
const LoginForm = ({ onLogin }) => {
  const handleSubmit = (data, actions) => {
    onLogin(data); // Викликаємо функцію onLoginі передаємо їй дані(збираємо дані з форми)
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
      validationSchema={UserLoginSchema}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Login</h2>
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
            type="password"
            name="password"
          />
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
          Sign In😉
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
