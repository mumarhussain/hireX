import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Button({ name, className, type, loading, onClick }) {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`px-12 mx-auto py-3 border-2  border-black text-black font-semibold rounded-xl hover:bg-black hover:text-themeColor cursor-pointer !text-center transition-colors duration-200 ${className}`}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="mx-auto flex items-center justify-center animate-spin text-lg text-center text-themeColor" />
      ) : (
        name
      )}
    </button>
  );
}
