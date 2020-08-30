import React, { Component } from "react";
import "./Home.css";
import { render } from "@testing-library/react";

class Home extends Component {
  state = {
    name: "Garima",
    designation: "Web Developer",
    githubLink: "https://github.com/garima423",
    linkedinLink: "https://www.linkedin.com/in/garima-sharma-492207163/",
    mail: "mailto:sharmagarima863@gmail.com",
    fb: "https://www.facebook.com/profile.php?id=100007997142138",
  };
  render() {
    return (
      <>
        {/* home page */}
        <div className="main">
          <div className="name">
            <h1>{this.state.name}</h1>
          </div>
          <div className="designation">
            <h2>And I am a {this.state.designation} 🎰</h2>
          </div>
          <div>
            <h4 className="connect">
              <i>Connect Via:</i>
            </h4>
          </div>
          {/* contact links */}
          <div className="links">
            <a href={this.state.githubLink}>
              <span class="fab fa-2x fa-github"></span>
            </a>
            <a href={this.state.linkedinLink}>
              <span class="fab fa-2x fa-linkedin-in"></span>
            </a>
            <a href={this.state.mail}>
              <span class="fab fa-2x fa-google-plus-g"></span>
            </a>
            <a href={this.state.fb}>
              <span class="fab fa-2x fa-facebook-f"></span>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
