import React, { useState } from 'react';
import classes from "./store.module.scss";
import Sidebar from './Sidebar/Sidebar';
import classNames from 'classnames';
import img7 from "../../../assets/images/b-bg7.jpg"
import { Link } from 'react-router-dom';
import Product from '../../product/product';
import { IoGridSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import img2 from "../../../assets/images/hbdr.png";
import img3 from "../../../assets/images/n-bg3.jpg";
import data from '../../../data';






const Listing = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenDropDown2, setisOpenDropDown2] = useState(false);


  return (
    <>
    <section className={classes.introBannerHolder }>

        <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> Shop</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Home  /</Link>
            </li>
      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
                 Shop
            </li>
            
            </ul>
            </div>
            
            
          </div>
          <div className={classes.container}>

        <div className={classes.listingData}>
          <div className={classes.listingData_row}>
             <div className={classes.sidebarWrapper}>
              <Sidebar/>
            </div>



            <div className={classes.listingData_row_rightContent}>

            <div className={classes.listingData_row_rightContent_topStrip}>


            <div className={classes.listingData_row_rightContent_topStrip_tab}>
              <button className={classes.listingData_row_rightContent_topStrip_tab_btn_show}
              onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                <IoGridSharp />
              </button>
              
          {
             isOpenDropDown !== false &&

            <ul className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu}>         
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown(false)}>50</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown(false)}>100</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown(false)}>150</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown(false)}> 200</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown(false)}> All</button></li>                                     
            </ul>
          } 

            </div>
            <p >Showing 1-9 of <span > 24
              {/* {data.length} */}
               </span> results</p>


            <div className={classes.listingData_row_rightContent_topStrip_tab}>
              <button className={classes.listingData_row_rightContent_topStrip_tab_btn}
              onClick={() => setisOpenDropDown2(!isOpenDropDown2)}>
                Sort by: 
                <IoIosArrowDown />
              </button>


              
          {
             isOpenDropDown2 !== false &&

            <ul className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu}>         
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown2(false)}>Featured</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown2(false)}> Price: Low to High</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown2(false)}> Price: High to Low</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown2(false)}> Release Date</button></li>
              <li><button className={classes.listingData_row_rightContent_topStrip_tab_dropdownMenu_btn} onClick={() => setisOpenDropDown2(false)}> Avg. Rating</button></li>                                     
            </ul>
          } 

            </div>

        {/* <div className='productRow pl-4 pr-3'>
          {
            data.length !== 0 &&
            data.map((item, index) => {
              return (
                 <div className='item' key={index}>
                  <Product tag={item.type} item={item} />
                 </div>
             )
           })
          }
        </div> */}

              </div>

            <div className={classes.dealSecHolder_dealSlider }>
            {data.productData_5.map((item,index)=>{
            return(
              <div className={classes.dealSecHolder_dealSlider_prodSlider_item}>

                <Product img={item.img} title={item.title} price={item.price} oldprice={item.oldprice}  key={index}/>
                 </div>
            )

          })}


               

              </div>

            

            </div>

            
    
            </div>
         </div>

          </div>






    </section>

    

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


    </>
  )
}

export default Listing

