import { styled, TextField } from "@mui/material";

export default styled((props) => <TextField fullWidth {...props} />, {
  shouldForwardProp: (props) => props !== "height" && props !== "fontSize",
})(({ theme, height, fontSize }) => ({
  ".MuiOutlinedInput-root": {
    width: "100%",
    height: height ? height : "unset",
    padding: ".7rem 1rem",
    backgroundColor: theme.palette.neutral.light,
    fontSize: fontSize ? fontSize : "unset",
    fieldset: {
      border: `none`,
    },
  },
}));
