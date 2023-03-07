import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from './Cart';

const API_TOP__RATE =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=10edb9cf5c4dd69ad20f8729748e1aa1';

const MainHeader = () => {
  // const images = [img1, img2, img3, img4];
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(API_TOP__RATE)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopular(data.results);
      });
  }, []);

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
    <header className="main-header">
      <div className="container main-header-container">
        <h3>Popular Movies</h3>
        <Slider {...settings}>
          {popular.map((item, i) => (
            <div className="slide one" key={i}>
              <Cart key={item.id} {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
};

export default MainHeader;
