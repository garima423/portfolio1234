import React from "react";
import { NavLink } from "react-router-dom";
import "./Certificate.css";

const Certificate = (props) => {
  return (
    <>
      {/* normal bootstrap code for cards */}
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          {/* imgSrc is coming as prop */}
          <img src={props.imgSrc} class="card-img-top" alt={props.imgSrc} />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            <p class="card-text">{props.details}</p>
            <NavLink to="#" class="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
