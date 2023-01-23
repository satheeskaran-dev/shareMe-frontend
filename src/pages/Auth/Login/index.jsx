import { useDispatch } from "react-redux";
import { Container } from "../styles";
import LoginForm from "../../../components/forms/LoginForm";
import { useLogInMutation } from "../../../service/authService";
import { setLoggedInUserData } from "../../../store/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [logIn, { isLoading }] = useLogInMutation();

  const loginFormSubmitHandler = async (values, { resetForm }) => {
    try {
      const response = await logIn(values);
      dispatch(setLoggedInUserData(response?.data));
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <LoginForm
        loginFormSubmit={loginFormSubmitHandler}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Login;
