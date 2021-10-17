import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './MoviesPage.Module.css';
import {getSearchMovies} from '../../services/movies-api.js';

export default function MoviesPage({ onChangeMovies }) {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const history = useHistory();
  

  useEffect(()=>{
    const searchQuery = new URLSearchParams(location.search).get('query');
    
    if (!searchQuery) return;

  getSearchMovies(searchQuery).then(data => {
    onChangeMovies([...data.data.results]);
  });
  }, []);

 
  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      return;
    }

    history.push({ ...location, search: `query=${search.toLowerCase()}` });

    onSearch(search.toLowerCase());
    reset();
  };

  const onSearch = query => {
    if (query === '') {
      return;
    }

    getSearchMovies(query)
      .then(respons => {
        onChangeMovies(respons.data.results);
      })
      .finally(() => {
        setSearch('');
      });
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="add movie"
        className={styles.Input}
      />
      <button type="submit">Search</button>
    </form>
  );
}
