import { styled, Box, Avatar as MuiAvatar } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  //   backgroundColor: theme.palette.background.medium,
  display: "flex",
  flexFlow: "column",
  gap: "1rem",
  width: "100%",
  padding: "0 1.5rem",
}));
export const InputWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.light,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexFlow: "column",
  gap: ".15rem",
  width: "100%",
  padding: ".5rem 0.875rem",
}));

export const Avatar = styled(MuiAvatar)({ width: "30px", height: "30px" });
