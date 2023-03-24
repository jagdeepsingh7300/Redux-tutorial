import React from "react";
import { useSelector } from "react-redux";

export const About = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <>
      <div>about</div>
      <div className="container">
        <h1>State values new</h1>
        <h4>{myState}</h4>
      </div>
      ;
    </>
  );
};
