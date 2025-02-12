import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='banner'>
      <Slider {...settings}>
        <div className='carousel-img-wrapper'>
          <img className="carousel-img" src="images/banner1.jpg" alt="First slide" />
        </div>
        <div className='carousel-img-wrapper'>
          <img className="carousel-img" src="images/banner2.jpg" alt="Second slide" />
        </div>
        <div className='carousel-img-wrapper'>
          <img className="carousel-img" src="images/banner3.jpg" alt="Third slide" />
        </div>
        <div className='carousel-img-wrapper'>
          <img className="carousel-img" src="images/banner4.jpg" alt="Fourth slide" />
        </div>
        <div className='carousel-img-wrapper'>
          <img className="carousel-img" src="images/banner5.jpg" alt="Fifth slide" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
