import "./ProCardStyles.css";
import ProCard from "./ProCard";
import ProjectCardData from "./ProCardData";

import React from 'react';

const Pro = () => {
  return (
    <div className="pro-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {ProjectCardData.map((val,ind) =>{
            return(
                <ProCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
           })} 
        </div>
    </div>
  )
};

export default Pro;
