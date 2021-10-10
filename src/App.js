import './App.css';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
// import Reviews from './views/Reviews';
// import Cast from './views/Cast';
// import MovieDetails from './views/MovieDetails';
// import MoviesPageView from './views/MoviesPageView';

const Cast = lazy(() => import('./views/Cast.js' /*webpackChunkName:"cast"*/));
const Reviews = lazy(() => import('./views/Reviews.js' /*webpackChunkName:"reviews"*/));
const MovieDetails = lazy(() => import('./views/MovieDetails.js' /*webpackChunkName:"movieDetails"*/));
const MoviesPageView = lazy(() => import('./views/MoviesPageView.js' /*webpackChunkName:"moviesPageView"*/));

// API Key (v3 auth)
// 9ee79cf45de55a8196583cb13968fce7
// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=9ee79cf45de55a8196583cb13968fce7
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWU3OWNmNDVkZTU1YTgxOTY1ODNjYjEzOTY4ZmNlNyIsInN
// 1YiI6IjYxM2VjN2I2YWFmODk3MDA4YzA2OGU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9u
// IjoxfQ.qsNcWVuf6djECHrE - 769hRWk - wBKif93gsuI2v_6nrE

// test for linux

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

        <Route path="/movies/:movieId" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <MovieDetails />
          </Suspense>
        </Route>

        <Route path="/movies/:movieId/cast" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <Cast />
          </Suspense>          
        </Route>

        <Route path="/movies/:movieId/reviews" exact>
          <Suspense fallback={<div>LOADING...</div>}>
            <Reviews />
          </Suspense>          
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
};

