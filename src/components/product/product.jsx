import React, { useState } from 'react'
import classes from "./product.module.scss"
import img2 from "../../assets/images/img2.jpg"
import { Link, NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { SlEye } from "react-icons/sl";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import data from "../../data";

const product = ( props) => {


  return (
    <div className={classes.productThumb}>

{
  props.tag!==null && props.tag!==undefined&&
<span  className={`${classes.productThumb_badge} ${props.tag}`}>{props.tag}</span> 
}
      {/* <span  className={`classes.productThumb_badge ${props.tag}`}> HOT</span> */}
        <div className={classes.productThumb_imgWrapper}>
          <img src={props.img} alt="" />
          <div className={classes.productThumb_imgWrapper_overlay}>
            <ul className={classes.productThumb_imgWrapper_overlay_list}>
              <li className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <IoMdHeartEmpty/>
                </Link>
              </li>

              <li className={classes.productThumb_imgWrapper_overlay_list_item}>
                <NavLink  to={"/pages"} className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <PiShoppingCartLight />  
                </NavLink>
              </li>

              <li className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <SlEye/>
                </Link>
              </li>

              <li className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <FaArrowRightArrowLeft/>
                </Link>
              </li>

              
            </ul>
       
          
        </div>
        </div>
      
        <div className={classes.productThumb_info}>
          <NavLink  className={classes.productThumb_info_link} >
        <span className={classes.productThumb_info_title}>
          {props.title}
         </span>
          </NavLink>
        {/* <span className={classes.productThumb_info_oldprice}>80.00 $</span> */}
        <span className={classes.productThumb_info_price}>{props.price}</span>

        </div>
    </div>
  )
}

export default product
