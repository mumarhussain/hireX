import React from "react";

export default function Button({ name, className, type}) {
  return (
    <button
      type={type}
      className={`px-12 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-themeColor cursor-pointer transition-colors duration-200 ${className}`}
    >
      {name}
    </button>
  );
}
