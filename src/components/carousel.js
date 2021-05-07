import React from "react";
import Img from "../assets/img/Cargo_watch_presentation1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComp = () => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div>
        <img src={Img} alt="" />
      </div>
      <div>
        <img src={Img} alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselComp;
