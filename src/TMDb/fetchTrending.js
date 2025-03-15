export const getTMDBTrendingMovies = async () => {
  const trendingURL = "https://api.themoviedb.org/3/trending/all/day";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  try {
    const res = await fetch(trendingURL, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("No trending movies found");
    }

    console.log(data.results);

    return data.results;
  } catch (err) {
    console.error(err);
  }
};

const getImageById = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/images`;
};
