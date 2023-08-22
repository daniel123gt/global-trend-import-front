import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-blue-40 rounded-full uppercase py-2 px-4 text-white text-xl w-full hover:opacity-90 transition-all">
      {children}
    </button>
  );
}
