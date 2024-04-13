import React from 'react'
import classes from "./testimonailSlider.module.scss"
import { RiDoubleQuotesL } from "react-icons/ri";


import Slider from 'react-slick'


const testimonailSlider = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    fade: true,
    arrow: false
  };


  return (
    <div>

{/* <section className={classes.partnerSlider }> */}
<div className={classes.container}>
<Slider {...settings} className={classes.testimonail}>


      <section className={classes.testimonailBlock}>
        <h1  className={classes.testimonailBlock_title }>What Say Client</h1>
        <p className={classes.testimonailBlock_title_icon}>
          <RiDoubleQuotesL/>
        </p>
        <p  className={classes.testimonailBlock_text }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          <br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          <br /> ex ea com- modo consequat. </p>
          <h3  className={classes.testimonailBlock_signatory}>Sarah Jefferson </h3>
             <p className={classes.testimonailBlock_signatory_title}>BTV - Designer</p>


      </section>

      <section className={classes.testimonailBlock }>
        <h1  className={classes.testimonailBlock_title }>What Say Client</h1>
        <p className={classes.testimonailBlock_title_icon}>
          <RiDoubleQuotesL/>
        </p>
        <p  className={classes.testimonailBlock_text }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          <br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          <br /> ex ea com- modo consequat. </p>
          <h3  className={classes.testimonailBlock_signatory}>Sarah  </h3>
             <p className={classes.testimonailBlock_signatory_title}>BTV - Designer</p>


      </section>
      <section className={classes.testimonailBlock }>
        <h1  className={classes.testimonailBlock_title }>What Say Client</h1>
        <p className={classes.testimonailBlock_title_icon}>
          <RiDoubleQuotesL/>
        </p>
        <p  className={classes.testimonailBlock_text }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          <br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          <br /> ex ea com- modo consequat. </p>
          <h3  className={classes.testimonailBlock_signatory}>Sarah Jefferson </h3>
             <p className={classes.testimonailBlock_signatory_title}>BTV - Designer</p>


      </section>
            </Slider>

</div>

{/* </section> */}
      
    </div>
  )
}

export default testimonailSlider 
