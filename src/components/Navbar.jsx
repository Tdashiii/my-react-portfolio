import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars, FaTimes} from "react-icons/fa";

import React, { useState } from 'react'

const Navbar = () => {

    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor]= useState(false);
    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true);
      } else {
        setColor(false);
      }
    }; 

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </div>
  )
}

export default Navbar
