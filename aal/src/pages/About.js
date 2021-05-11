import React from 'react'
import amsterdam from '../images/amsterdam1.jpg'
import hiking from '../images/hiking2.jpg'

const About = () => {
  return (
    <div className="About">
      <div className="about-top">
        <div className="about-text">
          <h4>Why should you use a travel consultant?</h4>
          <ul className="about-list">
            <li>I don’t charge booking fees, so no fees to use a consultant!</li>
            <li>A travel consultant will find the best value.</li>
            <li>
              A travel consultant will research, share knowledge and travel
              experience, and help you make the best choices.
            </li>
            <li>A travel consultant represents you if anything goes wrong.</li>
            <li>
              You can SAVE MONEY! Travel agents have access to airlines, resort
              rates, cruise vacations, package tours, and more.
            </li>
            <li>
              Travel consultants have direct access and a relationship with travel
              suppliers. This allows us to create the best travel experience for
              you!
            </li>
            <li>
              Travel consultants become travel experts by visiting many
              destinations, continuing education and training, and client
              feedback.
            </li>
          </ul>
        </div>

        <div className="about-image">
          <img className="image2" src={amsterdam} alt="amsterdam" />
        </div>
      </div>

      {/* bottom section */}
      <div className="about-bottom">
        <div className="about-bottom-image">
          <img className="image3" src={hiking} alt="hiking" />
        </div>

        <div className="about-bottom-text">
          <h4>We are here to help you plan your next travel experience.</h4>
          <ul className="about-bottom-list">
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

    </div>
  );
}

export default About
