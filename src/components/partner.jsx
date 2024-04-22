import React from 'react';
import brand1 from "../images/brand-01.webp";
import brand2 from "../images/brand-02.webp";
import brand3 from "../images/brand-03.webp";
import brand4 from "../images/brand-05.webp";
import brand5 from "../images/brand-06.webp";

const Partner = () => {
  return (
    <div className="partners-section">
      <div className="partners-heading">
        <p>Bizden danışırlar</p>
      </div>
      <div className="partners-logos">

        <a href="/">
          <img src={brand1} alt="500 Startups" />
        </a>
        <a href="/">
          <img src={brand2} alt="Startup Azerbaijan" />
        </a>
        <a href="/">
          <img src={brand3} alt="Forbes" />
        </a>
        <a href="link-to-techaz">
          <img src={brand4} alt="TechAZ" />
        </a>
        <a href="/">
          <img src={brand5} alt="Startup Azerbaijan" />
        </a>
      </div>
    </div>
  );
}

export default Partner;
