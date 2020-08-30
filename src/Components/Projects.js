import React, { Component } from "react";
import Project from "./Project";
import "./Projects.css";

class Projects extends Component {
  state = {
    projectName: [
      {
        name: "Resume",
        refer: "https://garimaresume-20428.web.app/",
      },
      {
        name: "Ristorante",
        refer: "https://github.com/garima423/Bootstrap",
      },
      {
        name: "Feast Hub",
        refer: "https://github.com/garima423/PizzaDeliverySystem",
      },
    ],
  };
  render() {
    return (
      // Project conatiners
      <div className="main">
        <h1 className="head">
          <i class="fas fa-th-list"></i>Projects
        </h1>
        <a href="/cert">
          <button className="btn btn-dark cert">Certifications</button>
        </a>
        <div id="portfolio-container">
          <div>
            {this.state.projectName.map((val, ind) => {
              return <Project key={ind} name={val.name} refer={val.refer} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
