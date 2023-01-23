import { Fragment } from "react";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default Layout;
