import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function formikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage name="username" />
        </div>

        <div>
          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default formikForm;
