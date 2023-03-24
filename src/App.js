import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import { About } from "./About.js";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  let text2 = "food";

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement</h1>
        <h4>redux and react</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(text2))}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber(4))}
          >
            <span>+</span>
          </a>
        </div>
      </div>
      <About />
    </>
  );
};
export default App;
