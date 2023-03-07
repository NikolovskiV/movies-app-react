import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=10edb9cf5c4dd69ad20f8729748e1aa1';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="home__container">
      <h3>All Movies</h3>
      <div className="home__cont-movie">
        {movies.map((item, i) => (
          <div className="cart__item" key={i}>
            <Cart key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
