import React, { Component } from "react";
import Skill from "./Skill";
import "./Skill.css";
import SData from "./SData";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        {/* normal jsx code */}
        <div className="bg">
          <h1 className="head">
            <i class="fas fa-chalkboard-teacher"></i>Skills
          </h1>
          <a href="/project">
            <button className="btn btn-dark cert">Projects</button>
          </a>

          {/* SData will be mapped for each value and imgSrc is coming from there only*/}
          <div className="inner">
            {SData.map((val, ind) => {
              return <Skill key={ind} imgSrc={val.imgSrc} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
export default About;
