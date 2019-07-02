const notificationReducerDefaultState = { success: "", error: "" };

const notificationReducer = (
  state = notificationReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_SUCCESS_NOTIFICATION":
      return { success: action.payload, error: "" };
    case "SET_ERROR_NOTIFICATION":
      return { success: "", error: action.payload };
    case "CLEAR_NOTIFICATION":
      return "";
    default:
      return state;
  }
};

export default notificationReducer;
