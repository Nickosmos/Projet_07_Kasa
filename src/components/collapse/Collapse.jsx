import React, { useState } from "react";
import downarrow from '../../assets/downarrow.svg';
import './Collapse.css';


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
          className={toggle ? "uparrow" : "downarrow" }
          src={downarrow}
          alt="Arrow"
        />
      </div>
      <div className={toggle ? "Collapse-toggle Animation" : "Collapse-toggle"}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};