import React from 'react'
import Product from '../../../product/product';
import TestimonailSlider from '../../../TestimonailSlider/testimonailSlider';
import Footer from "../../../common/Footer/Footer"

import Slider from 'react-slick'
import SliderBanner from './slider/index';

import classes from "./home2.module.scss"
import classNames from 'classnames';
import img2 from "../../../../assets/images/hbdr.png"

import { PiVanLight } from "react-icons/pi";
import { ImGift } from "react-icons/im";
import { PiRecycleLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import signature from "../../../../assets/images/signature.png"
import img30 from "../../../../assets/images/img30.jpg"
import img31 from "../../../../assets/images/img31.jpg"
import img32 from "../../../../assets/images/img32.jpg"


import { FaArrowRight } from "react-icons/fa";


import { Style } from 'react-style-tag';
import { Link } from 'react-router-dom';
import data from '../../../../data';




const Home = () => {

  return (
    <>


    <div className={classes.homeProducts}>
      <SliderBanner/>

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
      <section className={classes.quotationBlock }>

        <span  className={classes.quotationBlock_info }>
         <br /> We ship healthy potted plants right to your doorstep.
        <br /> Each plant comes with simple care instructions from 
        <br /> our plant experts.
        </span>

        <div className={classes.quotationBlock_img }>
        <img src={signature} alt="signature"/>
        </div>

        <div className={classes.quotationBlock_signatory}>
        <h3>Sarah Jefferson </h3>
        <p>- CEO</p>
        </div>





      </section>
      </div>

      <div className={classes.container}>       
      <section className={classes.productRow}>
        <div className={classes.productRow_header}>
          <h1 className={classes.productRow_header_title}> New Arrival</h1>

          <div className={classes.productRow_header_img}>
          <img src={img2} alt="" />
          </div>

          <span className={classes.productRow_header_info}>
          There are many variations of passages of lorem ipsum available
          </span>

        </div>
        <div className={classes.productRow_bottom}>

        {data.productData_3.map((item,index)=>{
            return(
              <div className={classes.productRow_bottom_item}>

                <Product img={item.img} title={item.title} price={item.price} oldprice={item.oldprice}  key={index}/>
                 </div>
            )

          })}

        </div>
      </section>
      </div>



      
      <div className={classes.container}>       
      <section className={classes.productRow}>
        <div className={classes.productRow_header}>
          <h1 className={classes.productRow_header_title}> Best seller</h1>

          <div className={classes.productRow_header_img}>
          <img src={img2} alt="" />
          </div>

          <span className={classes.productRow_header_info}>
          There are many variations of passages of lorem ipsum available
          </span>

        </div>
        <div className={classes.productRow_bottom}>

        {data.productData_4.map((item,index)=>{
            return(
              <div className={classes.productRow_bottom_item}>

                <Product img={item.img} title={item.title} price={item.price} oldprice={item.oldprice}  key={index}/>
                 </div>
            )

          })}

        </div>
      </section>
      </div>


      <div className={classes.container}>   

      <TestimonailSlider/> 
      </div>

      <div className={classes.container}>       
      <section className={classes.NewsPostColumn}>
        <div className={classes.NewsPostColumn_header}>
          <h1 className={classes.NewsPostColumn_header_title}> Latest News </h1>

          <div className={classes.NewsPostColumn_header_img}>
          <img src={img2} alt="image" />
          </div>

          <span className={classes.NewsPostColumn_header_info}>
          There are many variations of passages of lorem ipsum available
          </span>

        </div>
        <div className={classes.NewsPostColumn_bottom}>

        <div className={classes.NewsPostColumn_bottom_item}>
          <img src={img30} alt="image" className={classes.NewsPostColumn_bottom_item_img}/>
          <span className={classes.NewsPostColumn_bottom_item_img_time}>
            <h3>20</h3>
            <p>SEP</p>
          </span>

          <div className={classes.NewsPostColumn_bottom_item_info}>
            <span className={classes.NewsPostColumn_bottom_item_info_sharing}>
            Post by: 
            <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
              <Link className={classes.link} to="/shop"> Jane doe</Link>////shop?////
            </span>


            </span>

        <h2 className={classes.title}>Aptent taciti soci litora cianpen</h2>
        <p className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
         

            </div>


        </div>

        <div className={classes.NewsPostColumn_bottom_item}>
          <img src={img31} alt="image" />
          <span className={classes.NewsPostColumn_bottom_item_img_time}>
            <h3>18</h3>
            <p>SEP</p>
          </span>

          <div className={classes.NewsPostColumn_bottom_item_info}>
            <span className={classes.NewsPostColumn_bottom_item_info_sharing}>
            Post by: 

            <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
              <Link className={classes.link} to="/shop"> Jane doe</Link>
            </span>
            </span>

        <h2 className={classes.title}>Aptent taciti soci litora cianpen</h2>
        <p className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
         

            </div>


        </div>

        <div className={classes.NewsPostColumn_bottom_item}>
          <img src={img32} alt="image" />
          <span className={classes.NewsPostColumn_bottom_item_img_time}>
            <h3>21</h3>
            <p>SEP</p>
          </span>

          <div className={classes.NewsPostColumn_bottom_item_info}>
            <span className={classes.NewsPostColumn_bottom_item_info_sharing}>
            Post by: 



            <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
              <Link className={classes.link} to="/shop"> Jane doe</Link>
            </span>
            </span>

        <h2 className={classes.title}>Aptent taciti soci litora cianpen</h2>
        <p className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
         

            </div>

        </div>
       
        </div>
      </section>
      </div>

      </div>

    
    </>
  )
}

export default Home;