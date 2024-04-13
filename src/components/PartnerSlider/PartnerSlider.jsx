import React from 'react';
import classes from "./partnerSlider.module.scss";
// import img from "../../assets/images"
import img5 from "../../assets/images/p-logo1.png";
import img6 from "../../assets/images/p-logo2.png";
import img7 from "../../assets/images/p-logo3.png";
import img8 from "../../assets/images/p-logo4.png";
import img9 from "../../assets/images/p-logo5.png";
import img10 from "../../assets/images/p-logo6.png";
import Slider from 'react-slick';


const PartnerSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    arrow: false
  };


  return (
    <div>

{/* <h1 className={classes.title}>huoijk</h1> */}
<section className={classes.partnerSlider }>
<Slider {...settings} className={classes.partnerSlider_draggable}>


          <div className={classes.partnerSlider_draggable_item}>
              <img src={img5} alt="" />
            </div>

            <div className={classes.partnerSlider_draggable_item}>
            <img src={img6} alt="" />
            </div>

            <div className={classes.partnerSlider_draggable_item}>
            <img src={img7} alt="" />
            </div>

            <div className={classes.partnerSlider_draggable_item}>
            <img src={img8} alt="" />
            </div>

            <div className={classes.partnerSlider_draggable_item}>
            <img src={img9} alt="" />
            </div>

            <div className={classes.partnerSlider_draggable_item}>
            <img src={img10} alt="" />
            </div>
            </Slider>


</section>
      
    </div>
  )
}

export default PartnerSlider
