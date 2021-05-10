import React from "react";
import Animations from '../components/Animations';
import Button from 'react-bootstrap/Button';

import greece from '../images/greece.jpg';

const Home = () => {
  return (
    <div className="Home">

      <Animations />

      <div className="more">
        <Button href="#why-us">Learn More!</Button>
      </div>

      <div className="description" id="why-us" >
        <div className="agency-image">
          <img className="image1" src={greece} />
        </div>

        <div className="agency-card">
          <h4>Why us?</h4>
          <p className="agency">
            Away At Last Travel & Tours, along with my host agency, have many
            years of experience to provide you the best travel experience! Let us
            help you plan your next vacation. You will be able to anticipate,
            experience, and remember your special trip.
          </p>
        </div>

        {/* <br></br>
        <p>We are here to help you plan your next travel experience.</p>
        <ul className="list">
          <li>Destination weddings</li>
          <li>Honeymoons</li>
          <li>Group Travel</li>
          <li>All inclusive resorts</li>
          <li>Cruises</li>
          <li>Theme parks</li>
          <li>Tour packeges</li>
          <li>Airlines, Hotels, and Much More...</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Home;
