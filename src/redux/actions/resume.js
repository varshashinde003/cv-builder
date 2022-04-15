import storage from "redux-persist/lib/storage";
import {
  UPDATE_PERSONAL_DATA,
  UPDATE_RESUME_NAME,
  RESET,
} from "../reducers/resume";

export const updateDetails = (data) => (dispatch) => {
  if (data.resumeName) {
    dispatch({
      type: UPDATE_RESUME_NAME,
      payload: data.resumeName,
    });
  } else {
    dispatch({
      type: UPDATE_PERSONAL_DATA,
      payload: data,
    });
  }
};

export const reset = () => (dispatch) => {
  storage.removeItem(`persist:builder`);

  dispatch({
    type: RESET,
  });
};
