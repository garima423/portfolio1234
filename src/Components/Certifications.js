import React from "react";
import Certificate from "./Certificate";
import CData from "./CData";

const Certifications = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Certifications</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* Certificate component for each value of data */}
              {CData.map((val, ind) => {
                return (
                  <Certificate
                    key={ind}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    details={val.details}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
