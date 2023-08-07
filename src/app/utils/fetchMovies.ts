// fetchMovies.ts
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `"Bearer ${process.env.API}"`,
  },
};

export const getMovieData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=zh-TW&page=1",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=zh-TW&page=1",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};
