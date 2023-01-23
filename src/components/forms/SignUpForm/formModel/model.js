const formModel = {
  formStep1: {
    formField: {
      firstName: {
        name: "firstName",
        label: "First name",
        placeholder: "Enter your first name",
        requiredErrorMsg: "First name is required !",
      },
      lastName: {
        name: "lastName",
        label: "Last name",
        placeholder: "Enter your last name",
        requiredErrorMsg: "Last name is required !",
      },
      dateOfBirth: {
        name: "dateOfBirth",
        label: "Date of birth",
        requiredErrorMsg: "Date of birth is required",
      },
    },
  },
  formStep2: {
    formField: {
      location: {
        name: "location",
        label: "Location",
        placeholder: "Enter your location",
        invalidErrorMsg:
          "Your location length should be less than 70 characters !",
      },
      gender: {
        name: "gender",
        label: "Gender",
      },
      status: {
        name: "status",
        label: "Status",
      },
    },
  },
  formStep3: {
    formField: {
      school: {
        name: "school",
        label: "School",
        placeholder: "Enter your school",
        invalidErrorMsg:
          "Your school length should be less than 50 characters !",
      },
      college: {
        name: "college",
        label: "College",
        placeholder: "Enter your college",
        invalidErrorMsg:
          "Your college length should be less than 50 characters !",
      },
      university: {
        name: "university",
        label: "University",
        placeholder: "Enter your university",
        invalidErrorMsg:
          "Your university length should be less than 50 characters !",
      },
    },
  },
  formStep4: {
    formField: {
      work: {
        name: "work",
        label: "Work",
        placeholder: "Enter your work",
        invalidErrorMsg: "Your work length should be less than 30 characters !",
      },
      companyName: {
        name: "companyName",
        label: "Company name",
        placeholder: "Enter your company name",
        invalidErrorMsg:
          "Your company name length should be less than 20 characters !",
      },
      workPlace: {
        name: "workPlace",
        label: "Work place",
        placeholder: "Enter your work place",
        invalidErrorMsg:
          "Your work place length should be less than 30 characters !",
      },
    },
  },
  formStep5: {
    formField: {
      email: {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        requiredErrorMsg: "Email is required !",
        invalidErrorMsg: "Invalid Email !",
      },
      password: {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        requiredErrorMsg: "Password is required !",
        invalidErrorMsg: "Password should be at least 4 digits !",
      },
      profileImg: {
        name: "profileImg",
        label: "profileImg",
        supportedFormats: ["jpg", "jpeg", "png", "webp"],
        fileSize: 2097152,
        invalidErrorMsg: {
          isLargeFile: "File size is too large !",
          isUnSupported: "Unsupported file formate !",
        },
      },
    },
  },
};

export default formModel;
