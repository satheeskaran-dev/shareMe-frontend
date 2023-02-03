import { Fragment, useMemo } from "react";
import { useFormik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import validationSchema from "./formModel/validationSchema";
import Logo from "../../core/Logo";
import { Container } from "./styles";
import Stepper from "../../core/Stepper";
import {
  FormStep1,
  FormStep2,
  FormStep3,
  FormStep4,
  FormStep5,
} from "./formSteps";
import initialValues from "./formModel/initialValues";
import { memo } from "react";
import BackendError from "../../core/BackendError";

const SignUpForm = ({
  signUpFormSubmit,
  activeStep,
  handleBack,
  isButtonLoading,
  errorMsg,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema[activeStep],
    onSubmit: signUpFormSubmit,
  });

  const formSteps = useMemo(
    () => [
      <FormStep1 {...formik} />,
      <FormStep2 {...formik} />,
      <FormStep3 {...formik} />,
      <FormStep4 {...formik} />,
      <FormStep5 {...formik} />,
    ],
    [formik]
  );

  return (
    <form style={{ maxWidth: "35rem" }} onSubmit={formik.handleSubmit}>
      <Container>
        <Logo textAlign='center' />
        {formSteps[activeStep]}
        {activeStep === 4 && (
          <Fragment>
            <BackendError errorMsg={errorMsg} />
            <LoadingButton
              variant='contained'
              loading={isButtonLoading}
              type='submit'
            >
              Signup
            </LoadingButton>
          </Fragment>
        )}
        <Stepper {...{ activeStep, handleBack }} />
      </Container>
    </form>
  );
};

export default memo(SignUpForm);
