// fetchMovies.ts
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGRlM2QzYzBjMWYxNTYxYmE5MzMzN2VhNjk1OTg0ZSIsInN1YiI6IjY0MTBiOGYyZWRlMWIwMjhjNTk3OTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oczX-78kgXxYyXg-r6LNZaWIJ0EANfnb4J8Eu9Xto4",
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
