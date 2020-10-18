import React from 'react';
import "./OurWorks.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from "../../Resources/images/carousel-1.png";
import carousel2 from "../../Resources/images/carousel-2.png";
import carousel3 from "../../Resources/images/carousel-3.png";
import carousel4 from "../../Resources/images/carousel-4.png";
import carousel5 from "../../Resources/images/carousel-5.png"

const OurWorks = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <div className="mb-5 py-5 mt-5 carousel-container ">
            <h3 className="text-white text-center">
                Here are some of <span style={{ color: '#7ab259' }}>our works</span>
            </h3>
            <Slider className="mt-5 p-5 slider" {...settings}>
                <div>
                    <img
                        src={carousel1}
                        className="carousel-img"
                        alt="Carousel-1"
                    />
                </div>
                <div>
                    <img
                        src={carousel2}
                        className="carousel-img"
                        alt="Carousel-2"
                    />
                </div>
                <div>
                    <img
                        src={carousel3}
                        className="carousel-img"
                        alt="Carousel-3"
                    />
                </div>
                <div>
                    <img
                        src={carousel4}
                        className="carousel-img"
                        alt="Carousel-4"
                    />
                </div>
                <div>
                    <img
                        src={carousel5}
                        className="carousel-img"
                        alt="Carousel-5"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default OurWorks;