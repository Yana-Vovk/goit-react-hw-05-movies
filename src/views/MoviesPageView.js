import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import style from '../components/HomePage/HomePage.Module.css';

import MoviesPage from '../components/MoviesPage/MoviesPage';
import { getSearchMovies } from '../services/movies-api';

export default function MoviesPageView() {
  const location = useLocation();
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }
    if (search) {
      history.push({
        ...location,
        search: `?query=${search}`,
      });
    }
    getSearchMovies(search).then(response => {
      const fetchedMovies = response.data.results.map(movie => {
        return {
          movieId: movie.id,
          movieName: movie.title ?? movie.name,
        };
      });
      setMovies(prevState => [...prevState, ...fetchedMovies]);
    });
  }, [history, location, search]);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const param = new URLSearchParams(location.search).get('query');
    setSearch(param);
  }, [location.search]);

  const onSearchHandle = query => {
    setSearch(query);
    setMovies([]);
  };

  return (
    <>
      <MoviesPage onSearch={onSearchHandle} />
      {movies && (
        <ul className={style.MoviesList}>
          {movies.map(({ movieId, movieName }) => (
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