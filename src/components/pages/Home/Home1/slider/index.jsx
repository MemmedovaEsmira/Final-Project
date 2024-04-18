import React from 'react';
import "./index.css";
import Slider from 'react-slick';
import Slide1 from "../../../../../assets/images/slider-1.png";
import Slide2 from "../../../../../assets/images/slider-2.png"
import Slide3 from "../../../../../assets/images/slider-3.png"

import { FaArrowRight } from "react-icons/fa";


import { NavLink } from 'react-router-dom';


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
        <Slider {...settings} className='home_slider_Main'>

      
      <div className='item'>
        <img src={Slide1} alt="" className='item_img'/>
        <div className='item_img_info'>
          <h1> Houseplant</h1>
          <h1>The Perfect Choice.</h1>
          <p className='item_img_info_underline'></p>

          <span className='item_img_info_text'>Lorem ipsum is simply dummy text of the printing and typesetting industry <br />
          has been the industry's standart.
          </span>
    
          <NavLink   
       to="/store"
       className="header_menu_item--link">
          <button className='item_img_info_btn'>
            Shop now
          <FaArrowRight />
          </button>
       </NavLink>

         
        </div>

      </div>

      
      <div className='item'>
        <img src={Slide2} alt="" className='item_img_2' />
        <div className='item_img_info'>
          <div className='item_img_info_title'>
          <p className='item_img_info_title_left' ></p>
          <span className='item_img_info_title_right'>wellcome to botanical</span>

          </div>
          <h1> Plants Gonna Make  </h1>
          <h1>People Happy.</h1>

          <span className='item_img_info_text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </span>
    
          <NavLink
       to="/store"
       className="header_menu_item--link">
          <button className='item_img_info_btn'>
            Shop now
          <FaArrowRight />
          </button>
      
       </NavLink>

         
        </div>

      </div>

      <div className='item'>
        <img src={Slide3} alt="" className='item_img_3' />
        <div className='item_img_info'>
          <div className='item_img_info_title'>
          <p className='item_img_info_title_left' ></p>
          <span className='item_img_info_title_right'>wellcome to botanical</span>

          </div>
          <h1> Plants for healthy</h1>
      

          <span className='item_img_info_text'>Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </span>
    
          <NavLink
       to="/store"
       className="header_menu_item--link">
          <button className='item_img_info_btn'>
            Shop now
          <FaArrowRight />
          </button>
      
       </NavLink>

         
        </div>

      </div>

      
    </Slider>

      </section>




      <section className='cartSliderSection'>
        <div className='container'>

          <partnerSlider/>
        </div>

      </section>
    </div>
  )
}

export default HomeSlider;