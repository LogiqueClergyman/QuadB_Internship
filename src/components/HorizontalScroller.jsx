import React from "react";
import Slider from "react-slick";
import Thumbnail from "./Thumbnail";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function HorizontalScroller({ props }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // dots: true
        },
      },
    ],
  };

  return (
    <div className="px-1 md:px-5 md:pl-6 py-5">
      <p className="text-white font-bold text-4xl p-2">Genre</p>
      <Slider {...settings}>
        {props.map((movie, index) => (
          <div key={index}>
            <Thumbnail movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HorizontalScroller;
