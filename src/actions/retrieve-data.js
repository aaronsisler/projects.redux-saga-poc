export const REQUEST_RETRIEVE_DATA = "REQUEST_RETRIEVE_DATA";
export const RETRIEVE_DATA = "RETRIEVE_DATA";

export const failToRetrieveData = () =>
  Promise.reject({
    statusCode: 500,
    message: "Something broke retrieving data"
  });

export const retrieveData = async () => {
  try {
    const response = await Promise.resolve({ statusCode: 200 });
    return response.statusCode;
  } catch (error) {
    throw new Error("Something went wrong in API call");
  }
};

export const requestRetrieveData = () => ({ type: REQUEST_RETRIEVE_DATA });
