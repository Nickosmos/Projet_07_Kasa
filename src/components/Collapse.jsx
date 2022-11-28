import React, { useState } from "react";
import chevron from "../assets/chevronDown.svg";

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Collapse">
      <div onClick={toggleState} className="Collapse-visible">
        <h2>{props.title}</h2>
        <img
          className={toggle ? "chevronDown" : "chevronUp"}
          src={chevron}
          alt="Arrow directional"
        />
      </div>
      <div className={toggle ? "Collapse-toggle Animation" : "Collapse-toggle"}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};