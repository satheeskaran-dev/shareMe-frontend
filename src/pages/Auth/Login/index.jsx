import { useDispatch } from "react-redux";
import { Container } from "../styles";
import LoginForm from "../../../components/forms/LoginForm";
import { useLogInMutation } from "../../../service/authService";
import { setLoggedInUserData } from "../../../store/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [logIn, { isLoading, error }] = useLogInMutation();

  const loginFormSubmitHandler = async (values, { resetForm }) => {
    try {
      const { data } = await logIn(values);
      dispatch(setLoggedInUserData(data));
      data && resetForm();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <LoginForm
        loginFormSubmit={loginFormSubmitHandler}
        isLoading={isLoading}
        errorMsg={error?.data?.message}
      />
    </Container>
  );
};

export default Login;
