import Logo from "../core/Logo";
import Stepper from "../core/Stepper";

const FormLayout = ({ activeStep, handleBack, handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Logo textAlign='center' />
      {children}
      <Stepper {...{ activeStep, handleBack }} />
    </form>
  );
};

export default FormLayout;
