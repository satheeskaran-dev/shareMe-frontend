import formModel from "./model";

const {
  formStep1: {
    formField: { firstName, lastName, dateOfBirth },
  },
  formStep2: {
    formField: { location, gender, status },
  },
  formStep3: {
    formField: { college, school, university },
  },
  formStep4: {
    formField: { work, companyName, workPlace },
  },
  formStep5: {
    formField: { email, password, profileImg },
  },
} = formModel;

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [dateOfBirth.name]: "",

  [location.name]: "",
  [gender.name]: "male",
  [status.name]: "single",

  [college.name]: "",
  [school.name]: "",
  [university.name]: "",

  [work.name]: "",
  [companyName.name]: "",
  [workPlace.name]: "",

  [email.name]: "",
  [password.name]: "",
  [profileImg.name]: "",
};

export default initialValues;
