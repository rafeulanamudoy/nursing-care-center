import { faTable } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleDetails from "../SingleDetails/SingleDetails";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Service details show Here {serviceId} </h1>
    </div>
  );
};

export default ServiceDetails;
