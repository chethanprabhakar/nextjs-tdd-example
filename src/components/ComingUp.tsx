import React from "react";

const ComingUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <svg
        className="animate-spin h-12 w-12 mb-4 text-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5a1 1 0 001 1h6M4 20v-5a1 1 0 011-1h6m6 0a1 1 0 011 1v5m-6-16h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
      <h1 className="text-2xl font-semibold text-white">Coming Soon</h1>
    </div>
  );
};

export default ComingUp;
