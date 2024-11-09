import React from "react";
import "./Button.css";
const Button = ({ onClick, children, type = "button" }) => (
  <button type={type} onClick={onClick} className="button" disabled={disabled}>
    {children}
  </button>
);

export default Button;
