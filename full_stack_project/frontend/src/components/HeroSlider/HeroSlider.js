import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';
import Hero from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/hero.jpg';
import Hero2 from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/hero2.jpg'
const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const slides = [
        {
            image: Hero,
            title: 'Traditional Handloom Sarees',
            subtitle: 'Discover the beauty of Indian craftsmanship'
        },
        {
            image: Hero2,
            title: 'Artisan Collection',
            subtitle: 'Supporting local weavers and their art'
        },
        {
            image: Hero,
            title: 'Festival Special',
            subtitle: 'Exclusive designs for the festive season'
        }
    ];

    return (
        <div className="hero-slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide-container">
                        <img src={slide.image} alt={slide.title} />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;