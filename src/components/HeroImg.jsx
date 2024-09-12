import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/bg.jpg";
import Pic from "../assets/Jokwa.png";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <div className="item">
          <p><b>Hi, I am Virgilio Joshua Patdo</b></p>
          <h1>Web & Software Developer</h1>
        </div>
        <div className="item">
          <img classname="img" src={Pic} alt="true"/>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
