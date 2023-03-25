const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  let text = "sea1";
  switch (action.type) {
    case "INCREMENT":
      return state + action.payloadinc;
    case "DECREMENT":
      state = text.concat(action.payloadinc);
      return state;
    default:
      return state;
  }
};
export default changeTheNumber;
