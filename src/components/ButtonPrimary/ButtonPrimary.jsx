import React from "react";
import "./ButtonPrimary.css";

const ButtonPrimary = ({ name, type, onClick }) => {
  return (
    <button type={type} className="buttonPrimary" onClick={onClick}>
      {name} 
    </button>
  );
};

export default ButtonPrimary;
