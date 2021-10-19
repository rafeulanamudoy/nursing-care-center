import React from "react";

const SingleDetails = (props) => {
  console.log(props);
  const { serviceName } = props.singleService;
  return (
    <div>
      <img src="" />
      <h1>{serviceName}</h1>
      <p></p>
    </div>
  );
};

export default SingleDetails;
