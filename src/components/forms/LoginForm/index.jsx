import { memo } from "react";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "../../core/Button";
import validationSchema from "./validationSchema";
import TextField from "../../core/TextField";
import PasswordField from "../../core/PasswordField";
import { FlexContainer, FlexColumn } from "../../core/FlexItems";
import Logo from "../../core/Logo";
import { TypographyMedium } from "../../core/Typography";
import BackendError from "../../core/BackendError";

const initialValues = { email: "", password: "" };

const LoginForm = ({ loginFormSubmit, isLoading, errorMsg }) => {
  const navigate = useNavigate();
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({ initialValues, validationSchema, onSubmit: loginFormSubmit });

  console.log("login");
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
          <PasswordField
            label='Password'
            placeholder='Enter your password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <BackendError isError={Boolean(errorMsg)}>{errorMsg}</BackendError>
          <LoadingButton variant='contained' loading={isLoading} type='submit'>
            Login
          </LoadingButton>
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

export default memo(LoginForm);
