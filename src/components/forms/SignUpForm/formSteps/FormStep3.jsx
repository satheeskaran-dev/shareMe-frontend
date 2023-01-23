import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";

const FormStep1 = ({ values, handleChange }) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Educations</TypographyDark>
      <TextField
        name='school'
        label='School'
        placeholder='Enter your educated school'
      />
      <TextField
        name='college'
        label='College'
        placeholder='Enter your educated college'
      />
      <TextField
        label='University'
        name='university'
        placeholder='Enter your educated university'
      />
    </FlexColumn>
  );
};

export default FormStep1;
