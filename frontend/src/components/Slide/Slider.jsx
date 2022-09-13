import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import slideData from "../../assets/fake-data/slideData";

import Button from "../Button/Button";

const Slider = () => {
  const timeOut = 5000;
  const auto = true;
  const control = true;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === slideData.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? slideData.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, auto]);

  return (
    <div className="slider">
      {slideData.map((item, index) => (
        <SliderItem key={index} item={item} active={index === activeSlide} />
      ))}
      {control ? (
        <div className="slider__control">
          <div className="slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="slider__control__item">
            <div className="index">
              {activeSlide + 1}/{slideData.length}
            </div>
          </div>
          <div className="slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

Slider.propTypes = {
  slideData: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const SliderItem = ({ active, item }) => (
  <div className={`slider__item ${active ? "active" : ""}`}>
    <div className="slider__item__info">
      <div className={`slider__item__info__title color-${item.color} `}>
        <span>{item.title}</span>
      </div>
      <div className="slider__item__info__description">
        <span>{item.description}</span>
      </div>
      <div className="slider__item__info__btn">
        <Link to={item.path}>
          <Button backgroundColor={item.color} icon="bx bx-cart" animate={true}>
            xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
    <div className="slider__item__image">
      <img src={item.img} alt="" />
    </div>
  </div>
);

export default Slider;
