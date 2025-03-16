import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
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
        {isLoading ? (
          <span>
            Loading{" "}
            <FontAwesomeIcon
              icon={faCircleNotch}
              spin
              style={{ color: "#363636" }}
            />
          </span>
        ) : (
          <span>
            Load More{" "}
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              size="sm"
              style={{
                "--fa-primary-color": "#ab8bff",
                "--fa-secondary-color": "#363636",
              }}
            />
          </span>
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
