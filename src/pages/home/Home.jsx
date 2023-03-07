import React from 'react';
import MainHeader from '../../components/MainHeader';
import Movies from '../../components/Movies';
import Cartoon from '../cartoon/Cartoon';

import './home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Movies />
      <Cartoon />
    </>
  );
};

export default Home;
