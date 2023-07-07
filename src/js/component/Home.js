import React, { useEffect, useState } from 'react';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=600218396a35112d0aca91a392487907');
      const data = await response.json();
      const movieResults = data.results;
      setMovies(movieResults);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
