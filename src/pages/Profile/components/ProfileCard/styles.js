import { styled, Stack } from "@mui/material";

export const FollowInfo = styled((props) => (
  <Stack width='100%' direction='row' justifyContent='space-between' my={20} {...props} />
))({
  "&>*:nth-of-type(n+1)": {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
});
