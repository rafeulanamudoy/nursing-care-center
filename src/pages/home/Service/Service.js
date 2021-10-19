import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { serviceName, desc, img, id } = props.service;
  return (
    <div className="service-container ">
      <img src={img} />
      <h5 className="text-center text-success">{serviceName}</h5>
      <p className="service-desc ">{desc}</p>
      <Link to={`/service/${id}`}>
        <button className="btn btn-info mx-auto d-block text-light fw-bold mt-4">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Service;
