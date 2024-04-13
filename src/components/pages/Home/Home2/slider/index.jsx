import React from 'react';
import "./index.css";
import Slider from 'react-slick';
// import "../../../../../node_modules/react-slick"
import Slide4 from "../../../../../assets/images/slider-4.jpg";
import Slide5 from "../../../../../assets/images/slider-5.jpg"

import { FaArrowRight } from "react-icons/fa";


import { NavLink } from 'react-router-dom';
// import classNames from 'classnames';


const HomeSlider = () => {

  let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
        // arrow: true
      };
  
      
  return (
    <div>
      <section className="homeSlider">
        {/* <div className="container"> */}
        <Slider {...settings} className='home_slider_Main'>

      
        <div className='item'>
        <img src={Slide4} alt="image" className='item_img_4' />
        <div className='item_img_4_info'>
          <div className='item_img_4_info_title'>
          <p className='item_img_4_info_title_left' ></p>
          <span className='item_img_4_info_title_right'>wellcome to botanical</span>

          </div>
          <h1 > Houseplant   </h1>
          <h1>The Perfect Choice.</h1>

          <span className='item_img_4_info_text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </span>
    
          <NavLink
       to="/store"
       className="header_menu_item--link">
          <button className='item_img_4_info_btn'>
            Shop now
          <FaArrowRight />
          </button>
      
       </NavLink>

         
        </div>

      </div>

      
      <div className='item'>
        <img src={Slide5} alt="" className='item_img_5' />
        <div className='item_img_5_info'>

          <h1 className='item_img_5_info_title'>NUTRIENTS PLANTS</h1>
          <h1 className='item_img_5_info_year'>5019</h1>
          <span className='item_img_5_info_text'>OCCASSIONAL BOUQUET</span>
    
          <NavLink
       to="/store"
       className="header_menu_item--link">
          <button className='item_img_5_info_btn'>
            Shop now
          <FaArrowRight />
          </button>
      
       </NavLink>

         
        </div>

      </div>

    

      
    </Slider>
        {/* </div> */}
      </section>




      <section className='cartSliderSection'>
        <div className='container'>

          {/* <partnerSlider {...settings} className="cart_slider_main">
         <div className='item'>
          
         </div> */}
          <partnerSlider/>
        </div>

      </section>
    </div>
  )
}

export default HomeSlider;