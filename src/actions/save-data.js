export const REQUEST_SAVE_DATA = "REQUEST_SAVE_DATA";

export const failToSaveData = () =>
  Promise.reject({ statusCode: 500, message: "Something broke saving data" });

export const saveData = async () => {
  try {
    const response = await Promise.resolve({ statusCode: 200 });
    return response.statusCode;
  } catch (error) {
    throw new Error("Something went wrong in API call");
  }
};

export const requestSaveData = () => ({ type: REQUEST_SAVE_DATA });
