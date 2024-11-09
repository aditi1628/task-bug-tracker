import React from "react";
import "./FormField.css"; // Import the CSS file for form field styling

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error = false, // Added error prop to handle validation styles
}) => (
  <div className="form-field">
    <label>
      {label}
      {required && <span>*</span>} {/* Display asterisk if field is required */}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={error ? "error" : ""} // Apply error class if validation fails
    />
  </div>
);

export default FormField;
