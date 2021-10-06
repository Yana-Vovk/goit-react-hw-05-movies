import { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './MoviesPage.Module.css';

export default function MoviesPage({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(search);
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