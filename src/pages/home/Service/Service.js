import React from "react";
import "./Service.css";

const Service = (props) => {
  const { serviceName, desc, img } = props.service;
  return (
    <div className="service-container ">
      <img src={img} />
      <h5 className="text-center text-success">{serviceName}</h5>
      <p className="service-desc ">{desc}</p>
      <button className="btn btn-info mx-auto d-block text-light fw-bold mt-4">
        Details
      </button>
    </div>
  );
};

export default Service;
