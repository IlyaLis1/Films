import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <>
      {
        movies.length ?
          movies.map(movie => <Movie key={movie.imdbID} {...movie} />)
          : <h3>Nothing found</h3>
      }
    </>
  )
}

export default Movies