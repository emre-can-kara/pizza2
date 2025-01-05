import React from "react";

function Ingredients({ label, checked, onChange }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: checked ? "#FFD700" : "#F5F5F5", 
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: checked ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        marginBottom: "10px",
        width: "150px", 
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ marginRight: "10px" }} 
      />
      {label}
    </label>
  );
}

export default Ingredients;
