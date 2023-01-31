import { useState } from "react";
import TextField from "./TextField";
import { InputAdornment } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton from "@mui/material/IconButton";

const PasswordField = ({ ...TextFieldProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={showPassword ? "text" : "password"}
      {...TextFieldProps}
    />
  );
};
export default PasswordField;
