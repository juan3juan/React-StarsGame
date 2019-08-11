import React from "react";
import utils from "../math-utils";
import "../App.css";

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
