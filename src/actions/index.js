export const increment = (nb) => {
  return { type: "INCREMENT", payload: nb };
};
export const decrement = (nb) => {
  return { type: "DECREMENT", payload: nb };
};

export const isSignIn = () => {
  return "SIGN_IN";
};
