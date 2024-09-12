import "./ExpertiseStyles.css";

import React from 'react'

const Expertise = () => {
  return (
    <div className="information">
        <div className="infor-containers">
          <div className="inform">
            <h3>- Objective -</h3>
            <span className="bar"></span>
            <p><b>To further enhance my skills and extend my
                knowledge, I am eager to immerse myself in
                the experiential learning opportunities
                offered by a company. I am committed to
                leveraging every opportunity to grow
                professionally and personally, enriching my
                abilities and expertise along the way.</b></p>
          </div>
        </div>
      <div className="infor-container">
        <div className="infor">
            <h3>- Language -</h3>
            <span className="bar"></span>
            <p>- English -</p>
            <p>- Tagalog -</p>
        </div>

        <div className="infor">
            <h3>- Education -</h3>
            <span className="bar"></span>
            <p><b>Emilio Aguinaldo College - Manila</b></p>
            <p>Bachelor of Science in Information Technology </p>
            <p> 2019-2023 </p>
            <br></br>
            <p><b>Emilio Aguinaldo College - Manila SHS</b></p>
            <p>Science Technology Engineering and Mathematics</p>
            <p>2017-2019</p>
            <br></br>
            <p><b>Florentino Torres High School</b></p>
            <p>Completed Requirements for High School</p>
            <p>2013-2017</p>
        </div>
      </div>
    </div>
  )
}

export default Expertise
