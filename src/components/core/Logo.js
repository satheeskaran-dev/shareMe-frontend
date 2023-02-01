import { styled, Typography } from "@mui/material";
import { memo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Logo = styled((props) => (
  <Typography color='primary' {...props}>
    ShareMe
  </Typography>
))(({ theme }) => ({
  fontWeight: "700",
  fontSize: "clamp(1rem, 2rem, 2.5rem)",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.primary.light,
  },
}));

const _Logo = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Logo
      onClick={useCallback(
        () => pathname !== "/home" && pathname !== "/login" && navigate("/"),
        [pathname, navigate]
      )}
      {...props}
    />
  );
};

export default memo(_Logo);
