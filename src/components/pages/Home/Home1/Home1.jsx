import React, { useEffect, useState, useRef } from 'react'
import Product from '../../../product/product';
import PartnerSlider from '../../../PartnerSlider/PartnerSlider';
import Slider from 'react-slick'
import SliderBanner from './slider/index';

import classes from "./home1.module.scss"
import classNames from 'classnames';
import img1 from "../../../../assets/images/img1.jpg"
import img2 from "../../../../assets/images/hbdr.png"
import img3 from "../../../../assets/images/ad1.jpg"
import img4 from "../../../../assets/images/ad2.jpg"

// import img5 from "../../../assets/images/p-logo1.png"
// import img6 from "../../../assets/images/p-logo2.png"
// import img7 from "../../../assets/images/p-logo3.png"
// import img8 from "../../../assets/images/p-logo4.png"
// import img9 from "../../../assets/images/p-logo5.png"
// import img10 from "../../../assets/images/p-logo6.png"



import { PiPottedPlant } from "react-icons/pi";
import { PiCactusLight } from "react-icons/pi";
import { GiCactusPot } from "react-icons/gi";
import { PiVanLight } from "react-icons/pi";
import { ImGift } from "react-icons/im";
import { PiRecycleLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import data from '../../../../data';
import productData from "../../../../data"


import { Style } from 'react-style-tag';





const Home = () => {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrow: 0
  };


  
  const [timer, setTimer] = useState("00:00:00")
  const Ref =  useRef()

  function  getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date())
    const hour = Math.floor((total /1000 * 60 * 60) %24);
    const seconds = Math.floor((total / 1000) %60);
    const minute = Math.floor((total / 1000/ 60) %60);
    
    return{total, hour, minute, seconds}
  }

  
  function startTimer(e) {
    let { total, hour,minute, seconds} = getTimeRemaining(e)
    if(total >=0) {
      setTimer(
        (hour > 9 ? hour : '0' + hour) + ':' +
        (minute > 9 ? minute : '0' + minute) + ':' +
        (seconds > 9 ? seconds : '0' + seconds) 
      )
    }
  }

  function clearTimer(e){
    setTimer("00:00:00")
    if(Ref.current) clearInterval(Ref.current);
    const id = setInterval(()=>{
      startTimer(e)

    }, 1000)
    Ref.current = id;

  }

  function getDeadTime(){
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() +10);
    return deadline;
  }

  useEffect(()=>{
    clearTimer(getDeadTime())
  },[])

  return (

    <>


    <div className={classes.homeProducts}>
      <SliderBanner/>
      <div className={classes.container}>


      <section className={classes.selection}>
       <div className={classes.selection_img}>
        <img src={img1} alt=""  />
       </div>
       <div className={classes.selection_info}>
       <h2 className={classes.selection_info_title}>Why choose us ?</h2>
       <p className={classes.selection_info_title_underline}></p>
       <span className={classes.selection_info_text}>
       Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem
       ipsum has been the industry's standard dummy text ever since the 1500s  when an
       unknown printer took a galley ... 
       </span>

       <ul className={classes.selection_info_chooseList}>
        <li className={classes.selection_info_chooseList_reasion}>
          <span  className={classes.selection_info_chooseList_icon}>
            <PiPottedPlant />
            </span>

          <div  className={classes.selection_info_chooseList_reasion_right}>
           <h3 className={classes.selection_info_chooseList_reasion_title}>Hand Planted</h3>
            <span className={classes.selection_info_chooseList_reasion_text}>There are many variations of passages of lorem 
            ipsum available, but the majority have suffered alteration in some form.</span>
          </div>
        </li>
        
        <li className={classes.selection_info_chooseList_reasion}>
          <span  className={classes.selection_info_chooseList_icon}>
            <PiCactusLight  />
            </span>

          <div  className={classes.selection_info_chooseList_reasion_right}>
           <h3 className={classes.selection_info_chooseList_reasion_title}>Natural Sunlight</h3>
            <span className={classes.selection_info_chooseList_reasion_text}>It is a long established fact that a reader will be distracted by the reable content of a page.</span>
          </div>
        </li>

        <li className={classes.selection_info_chooseList_reasion}>
          <span  className={classes.selection_info_chooseList_icon}>
            <GiCactusPot  />
            </span>

          <div  className={classes.selection_info_chooseList_reasion_right}>
           <h3 className={classes.selection_info_chooseList_reasion_title}>Clean Air</h3>
            <span className={classes.selection_info_chooseList_reasion_text}>There are many variations of passages of lorem ipsum available, but the majority have suffered.</span>
          </div>
        </li>

       </ul>
       </div>
      </section>
      </div>
 

     <div className={classes.container}>       
      <section className={classes.productRow}>
        <div className={classes.productRow_header}>
          <h1 className={classes.productRow_header_title}>Featured Product</h1>

          <div className={classes.productRow_header_img}>
          <img src={img2} alt="" />
          </div>

          <span className={classes.productRow_header_info}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </span>

        </div>
        <div className={classes.productRow_bottom}>
          {data.productData.map((item,id)=>{
            return(
              <div className={classes.productRow_bottom_item}>

                <Product img={item.img} title={item.title} price={item.price} oldprice={item.oldprice} key={id}/>
                 </div>
            )

          })}

        <div className={classes.productRow_bottom_item}>
        </div>


        </div>
      </section>
      </div>

      <div className={classes.container}>       
      <section  className={classes.contactListBlock }>
        <div className={classes.contactListBlock_row}>

        <div className={classes.contactListBlock_row_col}>
        <div className={classes.contactListBlock_row_col_box}>
          <span className={classes.contactListBlock_row_col_box_icon}>
            <PiVanLight />
          </span>
          <div className={classes.contactListBlock_row_col_box_info}>
            <h4>Free shipping order</h4>
            <p>On orders over $100</p>
          </div>

        </div>

        </div>

        <div className={classes.contactListBlock_row_col}>
        <div className={classes.contactListBlock_row_col_box}>
          <span className={classes.contactListBlock_row_col_box_icon}>
            <ImGift />
          </span>
          <div className={classes.contactListBlock_row_col_box_info}>
            <h4>Special gift card</h4>
            <p>The perfect gift idea</p>
          </div>

        </div>
          </div>
          
          <div className={classes.contactListBlock_row_col}>
        <div className={classes.contactListBlock_row_col_box}>
          <span className={classes.contactListBlock_row_col_box_icon}>
            <PiRecycleLight />
          </span>
          <div className={classes.contactListBlock_row_col_box_info}>
            <h4>Return & exchange</h4>
            <p>Free return within 3 days</p>
          </div>

        </div>
          </div>

          <div className={classes.contactListBlock_row_col}>
        <div className={classes.contactListBlock_row_col_box}>
          <span className={classes.contactListBlock_row_col_box_icon}>
            <IoCallOutline />
          </span>
          <div className={classes.contactListBlock_row_col_box_info}>
            <h4>Support 24 / 7</h4>
            <p>Customer support</p>
          </div>

        </div>
          </div>

        </div>

      </section>
      </div>

      

      <div className={classes.container}>       
      <section className={classes.productOfferSec}>
        <img src={img3} alt="" />
        <img src={img4} alt="" />



      </section>
      </div>

      <div className={classes.container}>       
      <section className={classes.dealSecHolder}>
        <header className={classes.dealSecHolder_mainHeader}>
          <h1 className={classes.dealSecHolder_mainHeader_title}>Daily Deal</h1>
          <span className={classes.dealSecHolder_mainHeader_img}>
            <img src={img2} alt="Header Border" />
          </span>
          <p className={classes.dealSecHolder_mainHeader_info}>There are many variations of passages of lorem ipsum available.</p>

            <h3>{timer}</h3>
            </header>


          <div className={classes.dealSecHolder_dealSlider }>

          <Slider {...settings} className={classes.dealSecHolder_dealSlider_prodSlider}>

          {data.productData_2.map((item,index)=>{
            return(
              <div className={classes.dealSecHolder_dealSlider_prodSlider_item}>

                <Product img={item.img} title={item.title} price={item.price} oldprice={item.oldprice} key={index}/>
                 </div>
            )

          })}




        </Slider>
          </div>


      </section>
      </div>

      <div className={classes.container}>       
          <PartnerSlider/>
      </div>


      <div className={classes.container}>       
      <section className={classes.newsLetterSection}>

         <h1 className={classes.newsLetterSection_title}>Subscribe Our Newsletter</h1>  

        <div className={classes.newsLetterSection_img}>
   
          <img src={img2} alt="" />
          </div>
          <span className={classes.newsLetterSection_info}>
            Enter Your email address to join our mailing list and keep yourself update
          </span>

          <div className={classes.newsLetterSection_banner}>
            <input className={classes.newsLetterSection_banner_input} type="email" placeholder="Enter your mail..."/>
            <button className={classes.newsLetterSection_banner_button}>
              Shop Now 
              <FaArrowRight />
            </button>

          </div>

      </section>
      </div>

      </div>
    </>
  )
}

export default Home;
