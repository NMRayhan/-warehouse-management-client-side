import React from "react";
import { Carousel } from "react-bootstrap";
import "../Banner/Banner.css";
import Banner1 from "../../../Banner/Banner-1.jpg";
import Banner2 from "../../../Banner/Banner-2.jpg";
import Banner3 from "../../../Banner/Banner-3.jpg";

const Banner = () => {
  return (
    <Carousel fade className="Slider">
      <Carousel.Item className="Banner">
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>World Class Mechanic</h3>
          <p>Your Product Our responsibility, Fixed with Good Hand</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Banner">
        <img className="d-block w-100" src={Banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Any where Service, any time</h3>
          <p>Your Product Our responsibility, Fixed with Good Hand</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Banner">
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Customer Satisfaction is Our Satisfaction</h3>
          <p>Your Product Our responsibility, Fixed with Good Hand</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
