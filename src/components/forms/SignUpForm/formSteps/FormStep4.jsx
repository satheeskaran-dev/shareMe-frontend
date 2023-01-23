import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";

const FormStep4 = ({ values, handleChange }) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Professional</TypographyDark>
      <TextField name='work' label='Work' placeholder='Enter your work' />
      <TextField
        name='companyName'
        label='Company name'
        placeholder='Enter your company name'
      />
      <TextField
        name='workPlace'
        label='Work place'
        placeholder='Enter your work place'
      />
    </FlexColumn>
  );
};

export default FormStep4;
