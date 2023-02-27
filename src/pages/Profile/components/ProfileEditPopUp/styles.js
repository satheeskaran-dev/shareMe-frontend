import {
  styled,
  Paper,
  Avatar as MuiAvatar,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

export const Container = styled(Paper)(({ theme }) => ({
  position: "relative",
  margin: "auto",
  maxWidth: "450px",
  width: "100%",
  padding: "clamp(15px, 5vw, 40px)",
  borderRadius: "16px",
  border: "none",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 24px 24px #00000014 ",
}));

export const Avatar = styled(MuiAvatar)({
  width: "clamp(200px, 60vw, 370px)",
  height: "clamp(200px, 60vw, 370px)",
  margin: "30px auto",
});

export const CancelButton = styled((props) => (
  <IconButton {...props}>
    <CloseOutlined />
  </IconButton>
))({
  position: "absolute",
  top: "10px",
  right: "10px",
});

export const ProgressBar = styled(({ isLoading, ...otherProps }) => (
  <LinearProgress sx={{ display: !isLoading && "none" }} {...otherProps} />
))({
  height: "5px",
  position: "absolute",
  width: "96%",
  top: "0",
  left: "50%",
  transform: "translate(-50%)",
  borderRadius: "30px",
});
