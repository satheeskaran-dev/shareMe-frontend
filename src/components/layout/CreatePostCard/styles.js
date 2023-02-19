import { styled, Box } from "@mui/material";

export const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexFlow: "row",
  gap: "3px",
  "&>*:nth-of-type(1)": {
    fontSize: "small",
  },
  cursor: "pointer",
});
