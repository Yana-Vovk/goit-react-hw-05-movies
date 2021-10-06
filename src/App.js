import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
import Reviews from './views/Reviews';
import Cast from './views/Cast';
import MovieDetails from './views/MovieDetails';
import MoviesPageView from './views/MoviesPageView';

// API Key (v3 auth)
// 9ee79cf45de55a8196583cb13968fce7
// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=9ee79cf45de55a8196583cb13968fce7
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWU3OWNmNDVkZTU1YTgxOTY1ODNjYjEzOTY4ZmNlNyIsInN
// 1YiI6IjYxM2VjN2I2YWFmODk3MDA4YzA2OGU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9u
// IjoxfQ.qsNcWVuf6djECHrE - 769hRWk - wBKif93gsuI2v_6nrE


export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>

        <Route path="/movies" exact>
          <MoviesPageView/>
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetails/>
        </Route>

        <Route path="/movies/:movieId/cast" exact>
          <Cast/>
        </Route>

        <Route path="/movies/:movieId/reviews" exact>
          <Reviews/>
        </Route>

        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </Container>
  );
};

