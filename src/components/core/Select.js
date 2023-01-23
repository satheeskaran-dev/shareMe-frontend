import { MenuItem, FormControl, Select, Stack } from "@mui/material";
import { TypographyMedium } from "./Typography";

export default function BasicSelect({ label, status, handleChange, options = [], ...otherProps }) {
  return (
    <Stack direction='column' spacing={10} width='100%'>
      <TypographyMedium variant='subtile'>{label}</TypographyMedium>

      <FormControl variant='filled' fullWidth>
        <Select value={status ?? ""} onChange={handleChange} {...otherProps}>
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
