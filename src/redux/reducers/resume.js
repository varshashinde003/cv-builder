export const UPDATE_PERSONAL_DATA = "UPDATE_PERSONAL_DATA";
export const UPDATE_RESUME_NAME = "UPDATE_RESUME_NAME";
export const RESET = "RESET";

const INITIAL_STATE = {
  resumeName: "Resume No. 1",
  content: {
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    city: "",
    country: "",
    profileSummary: "",
    jobTitle: "",
    website: "",
    dob: "",
    nationality: "",
    maritalStatus: "",
    militaryService: "",
    drivingLicence: "",
    usAddress: false,
    social: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
    technicalSkills: [],
    achievements: [],
  },
};

const resumeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PERSONAL_DATA:
      return {
        ...state,
        content: { ...state.content, ...payload },
      };
    case UPDATE_RESUME_NAME:
      return {
        ...state,
        resumeName: payload,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default resumeReducer;
