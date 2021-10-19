import { faTable } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleDetails from "../SingleDetails/SingleDetails";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch("https://rafeulanamudoy.github.io/fakeservicedetail/fakeservice.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  return (
    <div>
      <h1>Service details show Here {serviceId} </h1>
    </div>
  );
};

export default ServiceDetails;
