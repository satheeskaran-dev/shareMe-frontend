import { Fragment } from "react";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSendLogoutMutation } from "../../service/authService";

const Layout = () => {
  const [sendLogout] = useSendLogoutMutation();

  return (
    <Fragment>
      <Header logoutButtonClicked={sendLogout} />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default Layout;
