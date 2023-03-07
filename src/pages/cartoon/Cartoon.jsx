import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import Slider from 'react-slick';
import './cartoon.css';

const API_URL_MOVIES =
  ' https://api.themoviedb.org/3/discover/movie?api_key=10edb9cf5c4dd69ad20f8729748e1aa1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

const Cartoon = () => {
  const [cartoon, setCartoon] = useState([]);

  useEffect(() => {
    fetch(API_URL_MOVIES)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartoon(data.results);
      });
  }, []);

  //   fetch('', {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '81276b91dfmsh3b5c401d77af7bcp1ff94fjsn6d158937f68a',
  //       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCartoon(data);
  //     })
  //     .catch((err) => console.error(err));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className="cartoon__container">
      <div className=" container top__rated-container">
        <h3>Top Rated</h3>
        <Slider {...settings}>
          {cartoon.map((item, i) => (
            <div className="slide two" key={i}>
              <Cart key={item.id} {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cartoon;
