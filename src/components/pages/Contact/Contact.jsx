import React from 'react';
import classes from "./contact.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";


const Contact = () => {
  return (
    <div>

<section className={classes.introBannerHolder }>
      <div className={classes.container}>
      <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> Contact</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Home  /</Link>
            </li>

      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
            Contact
            </li>
            
            </ul>
            </div>
            
            
          </div>

      </div>
      </section>
  
    </div>
  )
}

export default Contact;