import { Fragment, useState, useCallback } from "react";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ConfirmationPopUp from "../core/confirmationPopUp";
import { useSendLogoutMutation } from "../../service/authService";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [sendLogout, { isLoading }] = useSendLogoutMutation();

  return (
    <Fragment>
      <Header logoutButtonClicked={useCallback(() => setOpen(true), [])} />
      <Container>
        <Outlet />
      </Container>
      <ConfirmationPopUp
        isLoading={isLoading}
        btnText={"LOGOUT"}
        msg={
          isLoading
            ? "Logging out ..."
            : "Do you want to logout your account.. ?"
        }
        isOpen={open}
        handleClose={useCallback(() => setOpen(false), [])}
        handleConfirmationButtonClick={() => sendLogout()}
      />
    </Fragment>
  );
};

export default Layout;
