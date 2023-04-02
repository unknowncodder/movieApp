"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {}, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Some thing went wrong</h1>
      <button
        className="hover:text-amber-600"
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
