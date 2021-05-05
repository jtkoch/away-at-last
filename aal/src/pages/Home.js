import React from "react";

import logo from "../images/logo.jpg";
import image1 from "../images/beach2.jpg";
import image2 from "../images/machu-picchu.jpg";
import image3 from "../images/amsterdam2.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="title">
        <img className="logo" alt="" src={logo} />
        <p>sheri@awayatlasttravel.com</p>
        <p>217-474-7359</p>
      </div>
      <div className="images">
        <img src={image1} alt="" className="image1"></img>
        <img src={image2} alt="" className="image2"></img>
        <img src={image3} alt="" className="image3"></img>
      </div>
      <div className="body">
        <p className="body">
          Away At Last Travel & Tours, along with my host agency, have many
          years of experience to provide you the best travel experience! Let us
          help you plan your next vacation. You will be able to anticipate,
          experience, and remember your special trip.
        </p>
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
        </ul>
      </div>
    </div>
  );
};

export default Home;
