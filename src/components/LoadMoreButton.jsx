import React from "react";

const LoadMoreButton = ({ onClick, isLoading, hasMore }) => {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        className="bg-[#AB8BFF] mt-3 font-bold text-gray-800 px-4 py-2 rounded-lg hover:bg-[#9B7BFF] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
