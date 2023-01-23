import { styled, Box, Avatar } from "@mui/material";

export const ProfileImages = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "130px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));

export const CoverImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem 1.5rem 0 0",
  objectFit: "fill",
  border: 0,
}));
export const UserAvatar = styled(Avatar)(({ theme }) => ({
  border: `3px solid ${theme.palette.background.alt}`,
  width: "100px",
  height: "100px",
  position: "absolute",
  bottom: "-50px",
  boxShadow: theme.shadows[1],
}));



