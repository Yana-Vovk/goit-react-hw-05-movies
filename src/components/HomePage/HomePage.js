import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../services/movies-api';
import styles from './HomePage.Module.css';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies().then(response => {
      const fetchedMovies = response.data.results.map(movie => movie);
      setMovies(fetchedMovies);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul className={styles.MoviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.MoviesItem}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}}`,
                  state: { from: location },
                }}
                className={styles.MoviesLink}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}