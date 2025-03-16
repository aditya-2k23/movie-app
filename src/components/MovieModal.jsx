import React from "react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  console.log(movie);

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          className="w-full h-64 object-cover rounded-md"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/no-movie.png"
          }
          alt={movie.title}
        />

        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="text-gray-700 mt-2">
          {movie.overview || "No description available."}
        </p>

        <div className="flex justify-between mt-4 text-gray-600">
          <p>
            <strong>Language:</strong> {movie.original_language.toUpperCase()}
          </p>
          <p>
            <strong>Year:</strong>{" "}
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
