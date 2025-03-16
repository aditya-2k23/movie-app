import React from "react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const {
    release_date,
    title,
    overview,
    backdrop_path,
    original_language,
    poster_path,
    runtime,
  } = movie;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose(); // Close the modal if clicked on the overlay
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-primary p-8 rounded-lg shadow-2xl shadow-[#AB8BFF]/50 w-full md:w-2/3">
        {/* Close Button */}
        <button
          className="absolute top-1 right-2 text-3xl font-bold text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="text-light-200 mb-4">
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          <div className="flex flex-row items-center gap-2">
            <p className="year">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
            <span className="text-xs">●</span>
            <p className="lang">{original_language.toUpperCase()}</p>
            <span className="text-xs">●</span>
            <p className="">{runtime} mins</p>
          </div>
        </div>

        {/* Movie Image */}
        <div className="flex flex-row gap-5">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "/no-movie.png"
            }
            alt={title}
            className="w-52 h-full object-cover rounded-md"
          />
          <img
            className="object-cover h-70 rounded-md"
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                : "/wide-no-movie.png"
            }
            alt={title}
          />
        </div>

        {/* Movie Details */}
        <div>
          <div className="modal-content">
            <h3>Overview</h3>
            <p>{overview || "No description available."}</p>
          </div>
        </div>

        <div className="flex justify-between mt-4 text-gray-500">
          <p>
            <strong>Language:</strong> {original_language.toUpperCase()}
          </p>
          <p>
            <strong>Year:</strong>{" "}
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
