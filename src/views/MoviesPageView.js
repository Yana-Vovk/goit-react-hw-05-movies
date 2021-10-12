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
  // const [query, setQuery] = useState(() => {
  //   return new URLSearchParams(location.search).get('query') ?? '';
  // });

  // useEffect(() => {
  //   if (query === '') {
  //     return;
  //   }
  //   getSearchMovies(query)
  //     .then(respons => {
  //       setMovies(respons.results);
  //     })
  //     .finally(() => {
  //       setSearch('');
  //     });
  // }, [query]);

  const onSearchHandle = query => {
    if (query === '') {
      return;
    }
    getSearchMovies(query)
      .then(respons => {
        setMovies(respons.results);
      })
      .finally(() => {
        setSearch('');
      });
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