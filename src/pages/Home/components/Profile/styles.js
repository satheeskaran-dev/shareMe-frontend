import { styled, Stack, Button } from "@mui/material";

export const FollowInfo = styled((props) => (
  <Stack width='100%' direction='row' justifyContent='space-around' my={20} {...props} />
))({
  "&>*:nth-of-type(n+1)": {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
});

export const ViewProfileButton = styled((props) => (
  <Button variant='text' color='inherit' {...props} />
))({
  textTransform: "none",
  marginTop: "20px",
});
