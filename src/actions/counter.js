export const REQUEST_DECREMENT = "REQUEST_DECREMENT";
export const REQUEST_INCREMENT = "REQUEST_INCREMENT";

export const decrementCounter = { type: "DECREMENT" };
export const incrementCounter = { type: "INCREMENT" };

export const requestDecrementCounter = () => ({ type: REQUEST_DECREMENT });
export const requestIncrementCounter = () => ({ type: REQUEST_INCREMENT });
