import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './MoviesPage.Module.css';

export default function MoviesPage({ onSearch }) {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState(() => {
    return new URLSearchParams(location.search).get('query') ?? '';
  });
  
  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return;
    }
    setQuery(search.toLowerCase());
    history.push({ ...location, search: `query=${search.toLowerCase()}` });
    onSearch(query);
    reset();
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

// MoviesPage.propTypes = {
//   onSearch: PropTypes.func,
// };