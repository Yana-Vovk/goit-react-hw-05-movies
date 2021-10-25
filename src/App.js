import './App.css';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';

const Cast = lazy(() => import('./views/Cast.js' /*webpackChunkName:"cast"*/));
const Reviews = lazy(() =>
  import('./views/Reviews.js' /*webpackChunkName:"reviews"*/),
);
const MovieDetails = lazy(() =>
  import('./views/MovieDetails.js' /*webpackChunkName:"movieDetails"*/),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView.js' /*webpackChunkName:"moviesPageView"*/),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /*webpackChunkName:"notFoundView"*/),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <MoviesPageView />
          </Suspense>
        </Route>

        <Route path="/movies/:movieId">
          <Suspense fallback={<div>LOADING...</div>}>
            <MovieDetails />
          </Suspense>
        </Route>

        {/* <Route path="/movies/:movieId/cast" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <Cast />
          </Suspense>
        </Route>

        <Route path="/movies/:movieId/reviews" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <Reviews />
          </Suspense>
        </Route> */}

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
