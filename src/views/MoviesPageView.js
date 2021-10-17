import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import style from '../components/HomePage/HomePage.Module.css';

import MoviesPage from '../components/MoviesPage/MoviesPage';

export default function MoviesPageView() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  return (
    <>
      <MoviesPage onChangeMovies={setMovies} />
      {movies && (
        <ul className={style.MoviesList}>
          {movies.map(({ id: movieId, title: movieName }) => (
            <li key={movieId} className={style.MoviesItem}>
              <Link
                to={{
                  pathname: `/movies/${movieId}`,
                  state: { from: location },
                }}
                className={style.MoviesLink}
              >
                {movieName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}