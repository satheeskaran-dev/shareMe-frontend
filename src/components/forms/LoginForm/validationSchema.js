import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email !").required("Please enter your email !"),
  password: yup.string().required("Please enter your password !"),
});

export default validationSchema;
