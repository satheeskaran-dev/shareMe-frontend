import { styled, Stack, Paper } from "@mui/material";
import PropTypes from "prop-types";

const Container = styled((props) => <Paper elevation={1} {...props} />, {
  shouldForwardProp: (props) => props !== "row" && props !== "column" && props !== "gap",
})(({ theme, column, gap }) => ({
  width: "100%",
  display: "flex",
  flexFlow: column ? "column" : "row",
  gap: gap ? gap : "unset",
  padding: "1rem",
  borderRadius: "1.5rem",
  backgroundColor: theme.palette.background.alt,
  position: "relative",
}));

export const FlexContainer = ({ children, ...otherProps }) => <Container {...otherProps}>{children}</Container>;

FlexContainer.propTypes = {
  column: PropTypes.bool,
  gap: PropTypes.string,
};

export const FlexBetween = styled((props) => <Stack direction='row' alignItems='center' justifyContent='space-between' {...props} />)({});

export const FlexAround = styled((props) => <Stack direction='row' alignItems='center' justifyContent='space-around' {...props} />)({});

export const FlexColumn = styled((props) => <Stack direction='column' spacing={"1.5rem"} {...props} />)({ width: "100%" });

export const FlexRow = styled((props) => <Stack direction='row' spacing={".25rem"} {...props} />)({});
