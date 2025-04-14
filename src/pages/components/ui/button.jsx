import React from "react";

export function button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
