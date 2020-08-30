import React, { Component } from "react";
import "./Skill.css";
import { render } from "@testing-library/react";

class Skill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* props coming from About Component */}
        <div>
          <img src={this.props.imgSrc} />
        </div>
      </>
    );
  }
}
export default Skill;
