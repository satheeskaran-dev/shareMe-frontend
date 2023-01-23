import { styled, Button as MuiButton } from "@mui/material";

const Button = styled((props) => <MuiButton fullWidth variant='contained' {...props} />)(({ theme }) => ({ height: "2.5rem" }));

export default Button;
