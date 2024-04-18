import React from 'react';
import classes from "./contact.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";



const Contact = () => {
  return (
    <div>

<section className={classes.introBannerHolder }>
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

      </section>

      <section className={classes.contactSec}>
      <div className={classes.container}>
        <div className={classes.contactSec_list}>
          <span  className={classes.contactSec_list_item}>
          <p  className={classes.contactSec_list_item_icon}>
            <MdOutlineLocationOn />
          </p>
          <h3>ADDRESS</h3>
           <p className={classes.contactSec_list_item_info}>7th floor - Palace Building - 221B Walk of Fame
            <br /> -London - UK</p>
          </span>

          <span  className={classes.contactSec_list_item}>
            <p  className={classes.contactSec_list_item_icon}>
             <FaHeadphones />
            </p>
          <h3>PHONE</h3>
           <p className={classes.contactSec_list_item_info}>(+84) - 123 - 456 - 789</p>
           <p className={classes.contactSec_list_item_info}>(+84) - 321 - 654 - 987</p>
          </span>

          <span  className={classes.contactSec_list_item}>
          <p  className={classes.contactSec_list_item_icon}>
            <MdOutlineEmail />
          </p>
          <h3>EMAIL</h3>
          <p className={classes.contactSec_list_item_info}>Two-support@Two.lnk</p>
          <p className={classes.contactSec_list_item_info}>info@Two.lnk</p>
          </span>

        </div>
      </div>
      </section>

      <div className={classes.container}>       
          <div className={classes.reviewForm}>
          <div className={classes.reviewForm_header}>
          <h1 className={classes.reviewForm_header_title}>Get In Touch</h1>

          <span className={classes.reviewForm_header_info}>
          Lorem ipsum dolor consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          <br /> aliquam erat volutpatcommodo consequat.
          </span>

        </div>



            <div className={classes.reviewForm_group_item}>

                <div className={classes.reviewForm_group_item_input}>                      
                   <input  className={classes.reviewForm_group_item_input_control}  type={"text"}  placeholder="Your name  *" />
                </div>

                <div className={classes.reviewForm_group_item_input}>                           
                   <input className={classes.reviewForm_group_item_input_control}   type={"email "}  placeholder="Your email  *"/>
                </div>

                <div className={classes.reviewForm_group_item_input}>     
                   <input className={classes.reviewForm_group_item_input_control}   type={"number"} placeholder="Telephone number  *" />
                </div>

            </div>

            <div className={classes.reviewForm_group}>
              <textarea className={classes.reviewForm_group_control} placeholder='comment'
              //  name="review" value={reviewFields.review} onChange={(e) => changeInput(e.target.name, e.target.value)}
               >
              </textarea>

            </div>

            

            <div className={classes.reviewForm_group}>
              <button  className={classes.reviewForm_group_btn}>   
              Send Message        
              </button>
            </div>

          </div>


      </div>


  
    </div>
  )
}

export default Contact;