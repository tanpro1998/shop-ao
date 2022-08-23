import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

const HeroSlider = ({ data, control, auto, timeOut }) => {
  const time = timeOut ? timeOut : 5000;

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  console.log(activeSlide);

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, time);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, time, auto]);

  return (
    <div className="hero-slider mt-2">
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const HeroSliderItem = ({ active, item }) => (
  <div className={`hero-slider__item ${active ? "active" : ""}`}>
    <div className="hero-slider__item__info">
      <div className={`hero-slider__item__info__title color-${item.color} `}>
        <span>{item.title}</span>
      </div>
      <div className="hero-slider__item__info__description">
        <span>{item.description}</span>
      </div>
      <div className="hero-slider__item__info__btn">
        <Link to={item.path}>
          <Button backgroundColor={item.color} icon="bx bx-cart" animate={true}>
            xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
    <div className="hero-slider__item__image">
      <img src={item.img} alt="" />
    </div>
  </div>
);

export default HeroSlider;
