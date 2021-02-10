import React from 'react';
import Slider from 'react-slick';
import './HomepageBanner.css';
import banner1 from '../../../../Resources/Picture/HomeBanner/banner3.jpg';
import banner2 from '../../../../Resources/Picture/HomeBanner/banner2.jpg';
import banner3 from '../../../../Resources/Picture/HomeBanner/banner1.jpg';
import banner4 from '../../../../Resources/Picture/HomeBanner/banner4.jpg';
import banner5 from '../../../../Resources/Picture/HomeBanner/banner5.jpg';
import banner6 from '../../../../Resources/Picture/HomeBanner/banner6.jpg';
import banner7 from '../../../../Resources/Picture/HomeBanner/BucketInAD1.PNG';
import banner8 from '../../../../Resources/Picture/HomeBanner/BucketInAD2.PNG';
import banner9 from '../../../../Resources/Picture/HomeBanner/BucketInAD3.PNG';
import banner10 from '../../../../Resources/Picture/HomeBanner/BucketInAD4.PNG';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomepageBanner = () => {
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='homepageBanner'>
      <Slider {...settings} className='homepageBanner__container'>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner1} alt='banner' />
        </div>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner2} alt='banner' />
        </div>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner3} alt='banner' />
        </div>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner4} alt='banner' />
        </div>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner5} alt='banner' />
        </div>
        <div className='homepageBanner__imageContainer'>
          <img className='homepageBanner__image' src={banner6} alt='banner' />
        </div>
      </Slider>
    </div>
  );
};

export default HomepageBanner;
