import "./ProCardStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";

const ProCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                  <p>{props.text}</p>
                  <div className="pro-btn">
                    <NavLink to={props.view} className="btn" target="_blank">View</NavLink>
                  </div>
                </div>
            </div>
  )
};

export default ProCard
