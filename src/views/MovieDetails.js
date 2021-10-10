import { useState, useEffect, Suspense, lazy } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../services/movies-api';

import styles from './Movie.Module.css';

const Cast = lazy(() => import('./Cast.js' /*webpackChunkName:"cast"*/));
const Reviews = lazy(() => import('./Reviews.js' /*webpackChunkName:"reviews"*/));

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      const myMovie = {
        img: response.data.poster_path,
        name: response.data.title ?? response.data.name,
        score: response.data.vote_average,
        overview: response.data.overview,
        genres: response.data.genres,
      };
      return setMovie(myMovie);
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" className={styles.GoBackButton} onClick={onGoBack}>
            &#8678; Go Back
          </button>
          <div className={styles.MovieContainer}>
            <div className={styles.MovieImageContainer}>
              <img
                src={
                  movie.img !== null
                    ? 'https://image.tmdb.org/t/p/w400' + movie.img
                    : '../image/logo512.png'
                }
                alt={movie.name}
              />
            </div>
            <div>
              <h2 className={styles.MovieName}>{movie.name}</h2>
              <p>User Score: {movie.score}</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </div>

          <div className={styles.InformationContainer}>
            <h3 className={styles.InformationTitle}>Additional information</h3>

            <nav>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from },
                }}
                className={styles.InformationLink}
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
                className={styles.InformationLink}
              >
                Reviews
              </NavLink>
            </nav>
          </div>
          <Switch>
            <Route path={`${path}/cast`} exact>
              <Suspense fallback={<div>LOADING...</div>}>
                <Cast />
              </Suspense>
            </Route>

            <Route path={`${path}/reviews`} exact>
              <Suspense fallback={<div>LOADING...</div>}>
                <Reviews />
              </Suspense>
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}