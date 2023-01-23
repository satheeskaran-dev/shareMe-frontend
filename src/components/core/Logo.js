import { styled, Typography } from "@mui/material";

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

export default Logo;
