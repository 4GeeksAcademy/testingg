import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

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
    <div className="home-container">
      <h2 className="section-title">Featured Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="release-date">Release Date: {movie.release_date}</p>
              <p className="overview">Overview: {movie.overview}</p>
              <p className="rating">Rating: {movie.vote_average}</p>
              <Link to={`/movie/${movie.id}`} className="details-link">View Details</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
