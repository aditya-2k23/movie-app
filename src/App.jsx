import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "./appwrite";
import Navbar from "./components/Navbar";
// import { getTMDBTrendingMovies } from "./TMDb/fetchTrending";
import LoadMoreButton from "./components/LoadMoreButton"; // Import the new component

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 750, [searchTerm]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (query = "", page = 1) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
            query
          )}&page=${page}`
        : `${API_BASE_URL}/discover/movie?include_video=true&sort_by=popularity.desc&page=${page}`;

      console.log(`Fetching: ${endpoint}`);

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error(`Failed to fetch movies`);

      const data = await response.json();
      console.log("API Response:", data);

      if (!data.results || data.results.length === 0) {
        setErrorMessage(data.Error || "No movies found.");
        setMovieList([]);
        return;
      }

      setMovieList((prevMovies) =>
        page === 1 ? data.results : [...prevMovies, ...data.results]
      );

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Call fetchMovies with the first page on search
  useEffect(() => {
    setMovieList([]); // Clear previous results
    setCurrentPage(1);
    fetchMovies(debouncedSearchTerm, 1);
  }, [debouncedSearchTerm]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchMovies(debouncedSearchTerm, nextPage);
    }
  };

  const loadTrendingMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const movies = await getTrendingMovies();
      //   const movies = await getTMDBTrendingMovies();

      if (!movies || movies.length === 0) {
        throw new Error("No trending movies found");
      }

      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
      setErrorMessage(
        "Error fetching trending movies. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="pattern" />

      <div className="wrapper">
        <Navbar />

        <header>
          <img src="./hero.png" alt="Hero Image" />
          <h1 className="cursor-default">
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : !searchTerm ? (
          trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>

              <ul>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.id}>
                    <p className="cursor-default">{index + 1}</p>
                    <img
                      className="cursor-pointer"
                      src={movie.poster_url}
                      alt={movie.title}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )
        ) : (
          <></>
        )}

        <section className="all-movies">
          <h2 className="cursor-default mt-10">
            {searchTerm
              ? `Search Results for "${searchTerm}"`
              : movieList.length === 0
              ? `No Movies Found`
              : "Popular Movies"}
          </h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

        <LoadMoreButton
          onClick={handleLoadMore}
          isLoading={isLoading}
          hasMore={currentPage < totalPages}
        />
      </div>
    </main>
  );
};

export default App;
