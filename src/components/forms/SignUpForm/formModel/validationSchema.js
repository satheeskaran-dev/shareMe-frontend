import * as yup from "yup";
import formModel from "./model";

const {
  formStep1: {
    formField: { firstName, lastName, dateOfBirth },
  },

  formStep5: {
    formField: { email, password, profileImg },
  },
} = formModel;

const formStep1Schema = yup.object().shape({
  [firstName.name]: yup.string().required(firstName.requiredErrorMsg),
  [lastName.name]: yup.string().required(lastName.requiredErrorMsg),
  [dateOfBirth.name]: yup.string().required(dateOfBirth.requiredErrorMsg),
});

const formStep2Schema = yup.object().shape({});

const formStep3Schema = yup.object().shape({});

const formStep4Schema = yup.object().shape({});

const formStep5Schema = yup.object().shape({
  [email.name]: yup
    .string()
    .email(email.invalidErrorMsg)
    .required(email.requiredErrorMsg),
  [password.name]: yup
    .string()
    .min(4, `${password.invalidErrorMsg}`)
    .required(password.requiredErrorMsg),
  [profileImg.name]: yup
    .mixed()
    .test(
      "fileSize",
      "File too large",
      (value) => !value || (value && value.size <= profileImg.fileSize)
    )
    .test(
      "fileFormat",
      "Unsupported file type",
      (value) =>
        !value ||
        (value &&
          profileImg.supportedFormats.includes(
            value.type.replace("image/", "")
          ))
    ),
});

const validationSchema = [
  formStep1Schema,
  formStep2Schema,
  formStep3Schema,
  formStep4Schema,
  formStep5Schema,
];

export default validationSchema;
