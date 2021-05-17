import React from "react";
import LazyLoad from 'react-lazyload';
import Animations from '../components/Animations';

import greece from '../images/greece.jpg';

const Home = () => {
  return (
    <div className="Home">

      <Animations />

      <div className="description" id="why-us" >
        <div className="why-text">
          <h1>Away At Last <br/> Travel & Tours</h1>
          <p className="agency">
            Away At Last Travel & Tours, along with my host agency, have many
            years of experience to provide you the best travel experience! Let us
            help you plan your next vacation. You will be able to anticipate,
            experience, and remember your special trip.
          </p>
        </div>

       <div className="agency-image">
        <LazyLoad once offset={300}>
          <img className="image1" src={greece} alt="greece" />
        </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Home;
