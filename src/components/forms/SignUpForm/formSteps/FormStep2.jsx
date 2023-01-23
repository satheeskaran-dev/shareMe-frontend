import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";
import Select from "../../../core/Select";

const statusOptions = ["married", "single", "in a relationship"];
const genderOptions = ["male", "female", "custom"];

const FormStep3 = ({ values, handleChange }) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Basic information</TypographyDark>
      <TextField
        name='location'
        label='Location'
        placeholder='Enter your location'
        value={values.location}
        onChange={handleChange}
      />
      <Select
        name='gender'
        label='Gender'
        status={values.gender}
        options={genderOptions}
        handleChange={handleChange}
      />
      <Select
        name='status'
        label='Status'
        status={values.status}
        options={statusOptions}
        handleChange={handleChange}
      />
    </FlexColumn>
  );
};

export default FormStep3;
