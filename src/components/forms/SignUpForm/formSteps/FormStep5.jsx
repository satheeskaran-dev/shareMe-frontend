import { FlexColumn } from "../../../core/FlexItems";
import { TypographyDark } from "../../../core/Typography";
import TextField from "../../../core/TextField";
import Dropzone from "../../../core/Dropzone";

const FormStep5 = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <FlexColumn>
      <TypographyDark variant='h5'>Authentication</TypographyDark>
      <TextField
        label='Email'
        placeholder='Enter your Email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        label='Password'
        placeholder='Enter password '
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <Dropzone {...{ values, errors, setFieldValue }} />
    </FlexColumn>
  );
};

export default FormStep5;
