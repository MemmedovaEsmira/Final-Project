import React, { useState } from 'react';
import Sidebar from './BlogSidebar/BlogSidebar';
import BlogProduct from './BlogProduct/BlogProduct';
import classes from "./blog.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";


const Blog = () => {


  return (
    <div>

<section className={classes.introBannerHolder }>
      <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> Blog</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Home  /</Link>
            </li>

      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
                Blog
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

            <div className={classes.dealSecHolder_dealSlider }>
                <div className={classes.dealSecHolder_dealSlider_prodSlider_item}>
                  <BlogProduct />
                </div>

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
    </div>
  )
}

export default Blog



// import React from "react"
// // import Menu from "../../menu/menu"
// import { useNavigate } from "react-router-dom"
// import Languageoption from '../../language-dropdown'
// import {useTranslation} from 'react-i18next'
// import i18next from "i18next"
// const Blog = () => {
//     const history = useNavigate();
//     const handleRedirect = () => {
//         history('/about')
//     }
//     const {t} = useTranslation();
//     const handleClick=(e)=>{
//         i18next.changeLanguage(e.target.value)
//     }
//     return(
//         <div>
//             {/* <Menu/> */}
//             <Languageoption  onChange={(e)=> handleClick(e)}/>
//             <h1>{t('welcome')} {t('contact')} || Seema {t('holiday')} Developer</h1>

//         </div>
        
//     )
// }
// export default Blog