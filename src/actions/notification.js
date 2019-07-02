export const SET_ERROR_NOTIFICATION = "SET_ERROR_NOTIFICATION";
export const SET_SUCCESS_NOTIFICATION = "SET_SUCCESS_NOTIFICATION";

export const setErrorNotification = message => ({
  type: SET_ERROR_NOTIFICATION,
  payload: message
});

export const setSuccessNotification = message => ({
  type: SET_SUCCESS_NOTIFICATION,
  payload: message
});
