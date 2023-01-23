import { TextField as MuiTextField, Stack } from "@mui/material";
import { TypographyMedium } from "./Typography";

const TextField = ({ label, ...textFieldProps }) => (
  <Stack direction='column' spacing={10} width='100%'>
    <TypographyMedium variant='subtile'>{label}</TypographyMedium>
    <MuiTextField fullWidth variant='filled' {...textFieldProps} />
  </Stack>
);

export default TextField;
