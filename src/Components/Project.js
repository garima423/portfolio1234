import React, { Component } from "react";
import "./Projects.css";

class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // Project Component and data is coming as prop from Projects component
      <div className="project">
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
          <a href={this.props.refer}>
            <div class="portfolio-details">
              <h2>{this.props.name}</h2>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
