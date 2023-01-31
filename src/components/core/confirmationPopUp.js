import { styled, Modal, Paper, Typography, Button, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ReactComponent as ConfirmationIcon } from "../../assets/icons/confirmation.svg";

const Container = styled(Paper)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50% , -50%)",
  maxWidth: "400px",
  width: "100%",
  padding: "30px 50px ",
  borderRadius: "24px",
  border: "none",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 24px 24px #00000014 ",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const ConfirmationPopUp = ({
  isOpen,
  handleClose,
  msg,
  btnText,
  isLoading,
  handleConfirmationButtonClick,
}) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container elevation={0}>
        <ConfirmationIcon />
        <Typography variant='subtitle2'>{msg}</Typography>
        <Stack direction='column' gap='10px' width='100%' mt={20}>
          <LoadingButton
            variant='contained'
            fullWidth
            loading={isLoading}
            onClick={handleConfirmationButtonClick}
          >
            {btnText}
          </LoadingButton>
          <Button
            disableElevation
            variant='text'
            color='error'
            onClick={handleClose}
            disabled={isLoading}
          >
            CANCEL
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
};

export default ConfirmationPopUp;
