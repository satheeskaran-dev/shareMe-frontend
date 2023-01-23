import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../../components/forms/SignUpForm";
import { Container } from "../styles";
import { useSignUpMutation } from "../../../service/authService";

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleSignUpFormSubmit = useCallback(
    async (values, { setSubmitting }) => {
      if (activeStep !== 4) {
        setSubmitting(false);
        handleNext();
        return;
      }

      const formData = new FormData();

      Object.keys(values).map((value) => formData.append(value, values[value]));

      try {
        const response = await signUp(formData);
        if (response) navigate("/login");
      } catch (err) {
        console.log(err);
      }
    },
    [activeStep, handleNext, navigate, signUp]
  );

  return (
    <Container>
      <SignUpForm
        signUpFormSubmit={handleSignUpFormSubmit}
        handleBack={handleBack}
        activeStep={activeStep}
        isButtonLoading={isLoading}
      />
    </Container>
  );
};

export default SignUp;
