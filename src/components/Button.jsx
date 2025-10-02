import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="category-btn portfolio-btn btn-main">
      {children}
    </button>
  );
}
