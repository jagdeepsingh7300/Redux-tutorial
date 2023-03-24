export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payloadinc: num,
  };
};
export const decNumber = (text) => {
  return {
    type: "DECREMENT",
    payloadinc: text,
  };
};
