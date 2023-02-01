import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";

const FormStep4 = ({ values, handleChange }) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Professional</TypographyDark>
      <TextField
        name='work'
        label='Work'
        placeholder='Enter your work'
        value={values.work}
        onChange={handleChange}
      />
      <TextField
        name='companyName'
        label='Company name'
        placeholder='Enter your company name'
        value={values.companyName}
        onChange={handleChange}
      />
      <TextField
        name='workPlace'
        label='Work place'
        placeholder='Enter your work place'
        value={values.workPlace}
        onChange={handleChange}
      />
    </FlexColumn>
  );
};

export default FormStep4;
