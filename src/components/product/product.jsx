import React, { useState } from 'react'
import classes from "./product.module.scss"
import img2 from "../../assets/images/img2.jpg"
import { Link, NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { SlEye } from "react-icons/sl";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import data from "../../data";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/CartSlice';



const product = ( data) => {
  const dispatch = useDispatch()



  const handleAddToCart = () => {
    // console.log(data)
    dispatch(addToCart({
        ...data,
        quantity: 1
    }))
    alert("Successfully!")
}





  return (
    <div>

 
    <div className={classes.productThumb}>

        <div className={classes.productThumb_imgWrapper}>
          <img src={data.img} alt="" />
          <div className={classes.productThumb_imgWrapper_overlay}>
            <div className={classes.productThumb_imgWrapper_overlay_list}>
              <button className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <CiHeart/>
                </Link>
              </button>

              <button className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link  to={"/pages"} className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <PiShoppingCartLight  onClick={handleAddToCart} />  
                </Link>
              </button>

              <button className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link  to={"/shop-details"} className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <SlEye/>
                </Link>
              </button>

              <button className={classes.productThumb_imgWrapper_overlay_list_item}>
                <Link className={classes.productThumb_imgWrapper_overlay_list_item_cursor}>
                <FaArrowRightArrowLeft/>
                </Link>
              </button>

              
            </div>
       
          
        </div>
        </div>
      
        <div className={classes.productThumb_info}>
          <NavLink  className={classes.productThumb_info_link} >
        <span className={classes.productThumb_info_title}>
          {data.title}
         </span>
          </NavLink>
        <span className={classes.productThumb_info_oldprice}>{data.oldprice}</span>
        <span className={classes.productThumb_info_price}>{data.price}</span>

        </div>
    </div>
    </div>
  )
}

export default product
