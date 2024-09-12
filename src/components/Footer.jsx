import "./FooterStyles.css";
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className ="footer-container">
        <div className="left">
            <div className="info">
                <FaHome size={20} style={{ color : "#fff", marginRight: "2rem"}}/>
                <div>
                    <p><b>1993-I Katamanan St.</b></p>
                    <p><b>Tondo Manila</b></p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{ color : "#fff", marginRight: "2rem"}}/>
            +63 915 638 3777</h4>
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{ color : "#fff", marginRight: "2rem"}}/>
            Patdovirgilio@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <div className="social">
            <a href="https://www.facebook.com/icon010320/" target="_blank">
              <FaFacebook size={30} style={{ color : "#fff", marginRight: "2rem"}}/>
            </a>
            <a href="https://www.linkedin.com/in/virgilio-patdo-57b8a525a/" target="_blank">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
