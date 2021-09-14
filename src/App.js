import logo from './logo.svg';
import './App.css';

// API Key (v3 auth)
// 9ee79cf45de55a8196583cb13968fce7
// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=9ee79cf45de55a8196583cb13968fce7
// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWU3OWNmNDVkZTU1YTgxOTY1ODNjYjEzOTY4ZmNlNyIsInN
// 1YiI6IjYxM2VjN2I2YWFmODk3MDA4YzA2OGU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9u
// IjoxfQ.qsNcWVuf6djECHrE - 769hRWk - wBKif93gsuI2v_6nrE


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
