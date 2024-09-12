import "./SkillsContentStyles.css"

import React from 'react';
import Logo1 from "../assets/Java.png";
import Logo2 from "../assets/HTML5.png";
import Logo3 from "../assets/CSS.png";
import Logo4 from "../assets/JavaScript.png";
import Logo5 from "../assets/Python.png";
import Logo6 from "../assets/Mysql.png";
import Logo7 from "../assets/Sql.png";
import Logo8 from "../assets/Kotlin.png";
import Logo9 from "../assets/C++.png";
import Logo10 from "../assets/C.png";
import Logo11 from "../assets/React.png";
import Logo12 from "../assets/Ghl.png";
import Logo13 from "../assets/Zapier.png";
import Logo14 from "../assets/Android-studio.png";
import Logo15 from "../assets/Firebase.png";
import Logo16 from "../assets/Hashcat.png";
import Logo17 from "../assets/Canva.png";
import Logo18 from "../assets/Adobe.png";
import Logo19 from "../assets/Airtable.png";

const SkillsContent = () => {
  return (
    <div className="ski">
        <div className="infor">
            <h3>- Expertise -</h3>
            <span className="bar"></span>
            <p>- Web Development -</p>
            <p>- Software Development -</p>
            <p>- System Automation -</p>
            <p>- Spring Boot -</p>
            <p>- Microsoft Office -</p>
            <p>- System Analysis -</p>
            <p>- System Design -</p>
            <p>- Database Concepts -</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
      <div className="right">
      <h1>Skills</h1>
      <span className="bar"></span>
        <div className="img-container">
            <div className="img-stack-top">
                <img src={Logo1} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo2} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo3} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo4} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo5} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo6} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo7} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo8} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo9} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo10} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo11} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo12} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo13} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo14} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo15} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo16} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo17} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo18} className="img" alt="true"/>
            </div>
            <div className="img-stack-top">
                <img src={Logo19} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsContent
