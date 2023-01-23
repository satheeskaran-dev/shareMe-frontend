import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";

const FormStep2 = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Basic information</TypographyDark>
      <TextField
        label='First name'
        placeholder='Enter your first name'
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <TextField
        label='Last name'
        placeholder='Enter your last name'
        name='lastName'
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />
      <TextField
        label='Date of birth'
        type='date'
        name='dateOfBirth'
        value={values.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
        helperText={touched.dateOfBirth && errors.dateOfBirth}
      />
    </FlexColumn>
  );
};

export default FormStep2;
