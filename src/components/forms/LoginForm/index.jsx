import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "./schema";
import TextField from "../../core/TextField";
import Button from "../../core/Button";
import { FlexContainer, FlexColumn } from "../../core/FlexItems";
import Logo from "../../core/Logo";
import { TypographyMedium } from "../../core/Typography";

const initialValues = { email: "", password: "" };

const LoginForm = ({ loginFormSubmit }) => {
  const navigate = useNavigate();
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({ initialValues, validationSchema, onSubmit: loginFormSubmit });

  return (
    <FlexContainer sx={{ maxWidth: "35rem", p: "2.5rem 2rem" }}>
      <form onSubmit={handleSubmit}>
        <FlexColumn>
          <Logo textAlign='center' />
          <TextField
            label='Email'
            placeholder='Enter your email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            label='Password'
            placeholder='Enter your password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button type='submit'>Login</Button>
          <Divider flexItem>
            <TypographyMedium>or</TypographyMedium>
          </Divider>
          <Button variant='outlined' onClick={() => navigate("/sign-up")}>
            Create New Account
          </Button>
        </FlexColumn>
      </form>
    </FlexContainer>
  );
};

export default LoginForm;
