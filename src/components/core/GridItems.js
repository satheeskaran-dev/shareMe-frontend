import { styled, Grid } from "@mui/material";

export const GridContainer = styled((props) => <Grid container width='100%' {...props} />)({});
export const GridItem = styled((props) => <Grid item {...props} mb='1.5rem' />)({});
