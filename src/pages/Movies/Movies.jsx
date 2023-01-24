import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovie } from "../../api/fetchApi";
import MovieList from 'components/MovieList/MovieList';
import style from './Movies.module.scss';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

    

  useEffect(() => {
    console.log(query)
    if (query === '') return;
    setMovies(null);

    fetchMovie(`search/movie`, query, 1)
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, [query]);

  if (!movies) {
    return;
  }

  const handleInput = (event) => {
    setInputSearch(event.currentTarget.value);
  }

   const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };


  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>Search</span>
          </button>
          <input
            className={style.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInput}
            value={inputSearch}
          />
        </form>
      <MovieList movies={movies} titlePage={'Result search'} />
    </>
  );
};

export default Movies;