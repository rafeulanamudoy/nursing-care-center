import React from "react";
import "./SingleDetails.css";

const SingleDetails = (props) => {
  const { serviceName, desc, img } = props?.singleService;

  return (
    <div className="single-service-container d-block mx-auto">
      <img className="single-service-container" src={img} />
      <h5 className="text-center text-success">{serviceName}</h5>
      <p className="single-service-desc ">{desc}</p>

      <p></p>
    </div>
  );
};

export default SingleDetails;
