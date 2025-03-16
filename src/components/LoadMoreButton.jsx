import React from "react";

const LoadMoreButton = ({ onClick, isLoading, hasMore }) => {
  if (!hasMore) return null; // Hide button if no more pages

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
