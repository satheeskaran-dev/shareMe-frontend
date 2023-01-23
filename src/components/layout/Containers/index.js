import { styled, Grid } from "@mui/material";

export const Container = styled((props) => (
  <Grid width='calc(100% + 2.5%)' spacing={"2.5%"} container {...props} />
))({});

export const LeftContainer = styled((props) => <Grid item xs={12} md={3.5} {...props} />)({});

export const CenterContainer = styled((props) => <Grid item xs={12} md={5} {...props} />)({});

export const RightContainer = styled((props) => <Grid item xs={12} md={3.5} {...props} />)({});
