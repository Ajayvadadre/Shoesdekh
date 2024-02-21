import React, { createContext, useContext, useRef } from "react";
import "../Hero/Hero.css";
import header from "../Assets/images/Header.jpeg";
import arrow from "../Assets/images/arrow.svg";
import smallimg from "../Assets/images/small-img.jpeg";


const Hero = ({scrollToRef}) => {

  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="hero-left">
            <h1 className=" text-white text">
              {" "}
              Life can't be
              <br />
              Perfect but,
              <br /> your shoes <br />
              can be.
            </h1>
            <p>
              Step into simplicity with our trendy shoes!
              <br /> Find comfort and style on our website. <br />
              Your unique journey, your unique style – discover it here!
            </p>
          </div>
          <div className="left-bottom">
            <div className="hero-left2">
              <img src={smallimg} alt="" />
            </div>
            <button onClick={scrollToRef} id="exploreBtn" type="button">
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div className="hero-right image">
          <img src={header} />
        </div>
      </div>
    </>
  );
};

export default Hero;
