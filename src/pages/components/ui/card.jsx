import React from "react";

export function card({ children, className = "" }) {
  return (
    <div className={`bg-white text-black rounded shadow ${className}`}>
      {children}
    </div>
  );
}
