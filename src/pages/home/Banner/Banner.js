import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/Banner/Banner1.jpg";
import banner2 from "../../../images/Banner/Banner6.jpg";
import banner3 from "../../../images/Banner/Banner3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block  img-size " src={banner1} alt="First slide" />

        <Carousel.Caption className="carousel-caption">
          <h3 className="  text-danger fw-bold">Nursing Care Center</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img className="d-block img-size   " src={banner2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="  text-danger fw-bold">Nursing Care Center</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block   img-size   "
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3 className="   text-danger fw-bold">Nursing Care Center</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
