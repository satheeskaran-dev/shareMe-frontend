import { styled, Alert } from "@mui/material";

const BackendError = styled(
  (props) => <Alert variant='filled' severity='error' {...props} />,
  { shouldForwardProp: (props) => props !== "isError" }
)(({ theme, isError }) => ({
  display: isError ? "flex" : "none",
  width: "100%",
  padding: "3px 10px",
}));

export default BackendError;
