import { styled, Typography } from "@mui/material";

export const TypographyDark = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.dark,
  fontWeight: 600,
}));

export const TypographyMedium = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.medium,
  fontWeight: 500,
}));

export const TypographyLight = styled(Typography)(({ theme }) => ({
  color: theme.palette.neutral.light,
}));
