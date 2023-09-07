import React from "react";
import bakedchicken from "../Assets/baked-chicken.png";
import badge from "../Assets/Badge.png";

const Hero = () => {
  return (
    <>
    {/* <div className="autoplay"> */}
        
      <div className="Main">
        <div className="leftHeroPage">
          <h1>Spicy delicious chicken wings</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        {/* <div className='badge'>
        <img src={badge} alt='badge' />
    </div> */}
        <div className="rightHeroPage">
          <img src={bakedchicken} alt="baked chicken" />
        </div>
      </div>
      
      {/* </div> */}
    </>
  );
};

export default Hero;
