import { styled, Box, Avatar as MuiAvatar } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
}));

export const Avatar = styled(MuiAvatar)({
  width: "40px",
  height: "40px",
  marginRight: "15px",
});
