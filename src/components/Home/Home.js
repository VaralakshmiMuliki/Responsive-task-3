import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.scss";
import "../../components/mediaQueries.scss";

export const Home = () => {
  const carouselItems = [
    {
      itemClass: "bg-imag-1",
      captionClass: "carousel-1-des",
      title: "business",

      buttonContent: "contact us",
    },
    {
      itemClass: "bg-imag-2",
      captionClass: "carousel-2-des",
      title: "agency",

      buttonContent: "contact us",
    },
  ];
  return (
    <Carousel className="carousel-container" controls={false}>
      {carouselItems.map((each,i) => (
        <Carousel.Item key={i} interval={1000} className={each.itemClass}>
          <Carousel.Caption className={each.captionClass}>
            <h1>{each.title}</h1>
            <p>
              There are many variations of passages but the majority have
              suffered alteration.
            </p>
            <button className="carousel-button">{each.buttonContent}</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
