import { styled, Alert } from "@mui/material";

const MuiAlert = styled(
  (props) => <Alert variant='filled' severity='error' {...props} />,
  { shouldForwardProp: (props) => props !== "isError" }
)(({ theme, isError }) => ({
  display: isError ? "flex" : "none",
  width: "100%",
  padding: "3px 10px",
}));

const BackendError = ({ errorMsg }) => (
  <MuiAlert isError={Boolean(errorMsg)}>{errorMsg}</MuiAlert>
);

export default BackendError;
