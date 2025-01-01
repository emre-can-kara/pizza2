import React from "react";

function Ingredients({ label, checked, onChange }) {
  return (
    <label style={{ display: "block", marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={checked} 
        onChange={onChange} 
      />
      {label}
    </label>
  );
}

export default Ingredients;