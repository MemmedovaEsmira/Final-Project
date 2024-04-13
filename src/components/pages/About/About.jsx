import React from 'react';
import Accordion from "./Accordion/Accordion"
import classes from "./about.module.scss";
import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";
import img80 from "../../../assets/images/img80.jpg";
import img81 from "../../../assets/images/img81.png";
import img82 from "../../../assets/images/img82.jpg";
import img83 from "../../../assets/images/img83.jpg";
import img84 from "../../../assets/images/img84.jpg";


const data = [
  {
  title: "connecting people ",
  content: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!"
  },
  {
    title: "we build your dream",
    content: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!"
  },
  {
    title: "nothing to fear ",
    content: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!"
  },
  {
    title: "make the world better",
    content: "To succeed you must believe. When you believe, you will succeed. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! Lion!"
  }


]



const About = () => {
  return (
    <div>
      
      <div className={classes.container}>
      <section className={classes.introBannerHolder }>
      <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> About Us</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Home  /</Link>
            </li>
      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
            About
            </li>
            
            </ul>
            </div>
            
            
          </div>

      </section>
      </div>

      <div className={classes.container}>
      <section className={classes.abtSecHolder}>
        <div className={classes.abtSecHolder_info}>
          <h2 className={classes.abtSecHolder_info_title}>
                   A Minimal Team
            <br /> For a Better World
          </h2>
          <p></p>

          <span className={classes.abtSecHolder_info_text}>
          Lorem Khaled Ipsum is a major key to success. The ladies always say 
          Khaled you smell good, I use no cologne. Cocoa butter is the key. To 
          succeed you must believe. When you believe, you will succeed. They will 
          try to close the door on you, just open it. The key is to drink coconut, 
          fresh coconut, trust me. It’s important to use cocoa butter. It’s the key to 
          more success, why not live smooth?
          </span>


      </div>
        <div className={classes.abtSecHolder_img}>
          <img src={img80} alt="" />
        </div>

        </section>
        </div>

  <div className={classes.container}>
    <section className={classes.progressCounter }>
      <div  className={classes.progressCounter_info}>
        <h1>229</h1>
        <p>Happy Clients</p>        
      </div>
      <div  className={classes.progressCounter_info}>
        <h1>109</h1>
        <p>COMPLETED PROJECT</p>        
      </div>
      <div  className={classes.progressCounter_info}>
        <h1>22</h1>
        <p>AWESOME STAFF</p>        
      </div>
      <div  className={classes.progressCounter_info}>
        <h1>11</h1>
        <p>WINNING AWARDS</p>        
      </div>
   

    </section>
  </div>  

    <section className={classes.introSec}>
    <div className={classes.container}>
      <div className={classes.introSec_info}>

      <img src={img81} alt=""  />

      <div className={classes.introSec_info_accordion}>
        {
          data.map((item,index) => <div
          key={index}
          >
            <Accordion           
            title={item.title}
            content={item.content}
            />
          </div>)
        }

        </div>

      </div>


      </div>         
    </section>

    <div className={classes.container}>       
      <section className={classes.ProcessStepSec}>
        <div className={classes.ProcessStepSec_header}>
          <h1 className={classes.ProcessStepSec_header_title}> Delivery Process</h1>

          <div className={classes.ProcessStepSec_header_img}>
          <img src={img2} alt="image" />
          </div>        

        </div>
        
        <div className={classes.ProcessStepSec_bottom}>

              <div className={classes.ProcessStepSec_bottom_item}>

                <h3 className={classes.ProcessStepSec_bottom_item_mainTitle}>STEP 01</h3>
        
                  <div className={classes.ProcessStepSec_bottom_item_info}>           
                    <h3 class={classes.ProcessStepSec_bottom_item_info_title}>CHOOSE YOUR PRODUCTS</h3>
                    <p className={classes.ProcessStepSec_bottom_item_info_job}>
                      There are many variations of passages of lorem ipsum 
                      available, but the majority have suffered alteration in 
                      some form, by injected humour. Both betanin
                    </p>
        
                  </div>

              </div>


              <div className={classes.ProcessStepSec_bottom_item_2}>
                <div className={classes.ProcessStepSec_bottom_item}>

                    <h3 className={classes.ProcessStepSec_bottom_item_mainTitle }>STEP 01</h3>

                    <div className={classes.ProcessStepSec_bottom_item_info}>           
                      <h3 class={classes.ProcessStepSec_bottom_item_info_title}>CHOOSE YOUR PRODUCTS</h3>
                        <p className={classes.ProcessStepSec_bottom_item_info_job}>
                          There are many variations of passages of lorem ipsum 
                          available, but the majority have suffered alteration in 
                          some form, by injected humour. Both betanin
                        </p>
                    </div>
                   </div>

              </div>

                  <div className={classes.ProcessStepSec_bottom_item}>

                    <h3 className={classes.ProcessStepSec_bottom_item_mainTitle }>STEP 01</h3>

                    <div className={classes.ProcessStepSec_bottom_item_info}>           
                      <h3 class={classes.ProcessStepSec_bottom_item_info_title}>CHOOSE YOUR PRODUCTS</h3>
                        <p className={classes.ProcessStepSec_bottom_item_info_job}>
                          There are many variations of passages of lorem ipsum 
                          available, but the majority have suffered alteration in 
                          some form, by injected humour. Both betanin
                        </p>
                    </div>

                  </div>


                  <div className={classes.ProcessStepSec_bottom_item_2}>
                  <div className={classes.ProcessStepSec_bottom_item}>

                    <h3 className={classes.ProcessStepSec_bottom_item_mainTitle }>STEP 01</h3>

                    <div className={classes.ProcessStepSec_bottom_item_info}>           
                       <h3 class={classes.ProcessStepSec_bottom_item_info_title}>CHOOSE YOUR PRODUCTS</h3>
                            <p className={classes.ProcessStepSec_bottom_item_info_job}>
                               There are many variations of passages of lorem ipsum 
                               available, but the majority have suffered alteration in 
                               some form, by injected humour. Both betanin
                            </p>

                    </div>

                  </div>
                  </div>
             
        </div>

      </section>
      </div>

    <div className={classes.container}>       
      <section className={classes.NewsPostColumn}>
        <div className={classes.NewsPostColumn_header}>
          <h1 className={classes.NewsPostColumn_header_title}> Meet Our Team</h1>

          <div className={classes.NewsPostColumn_header_img}>
          <img src={img2} alt="image" />
          </div>        

        </div>

        <div className={classes.NewsPostColumn_bottom}>

              <div className={classes.NewsPostColumn_bottom_item}>
                <img src={img82} alt="image" className={classes.NewsPostColumn_bottom_item_img}/>
        
                  <div className={classes.NewsPostColumn_bottom_item_info}>           
                    <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
                      <Link className={classes.link} to="/shop"> REDIKIEL</Link>////shop?////
                    </span>
                    <p className={classes.NewsPostColumn_bottom_item_info_job}>Co - Founder & CEO</p>
        
                  </div>
                  <ul className={classes.NewsPostColumn_bottom_item_socialNetworks}>
                    <li><Link className={classes.link} to=""> <FaFacebookF/></Link></li>
                    <li><Link className={classes.link} to=""> <FaTwitter/></Link></li>
                    <li><Link className={classes.link} to=""> <FaInstagram/></Link></li>
                  </ul>

              </div>

              <div className={classes.NewsPostColumn_bottom_item}>
                <img src={img83} alt="image" className={classes.NewsPostColumn_bottom_item_img}/>
        
                  <div className={classes.NewsPostColumn_bottom_item_info}>           
                    <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
                      <Link className={classes.link} to="/shop"> ANGELA</Link>////shop?////
                    </span>
                     <p className={classes.NewsPostColumn_bottom_item_info_job}>Chief Of Marketing Team</p>
         
                  </div>
                  <ul className={classes.NewsPostColumn_bottom_item_socialNetworks}>
                    <li><Link className={classes.link} to=""> <FaFacebookF/></Link></li>
                    <li><Link className={classes.link} to=""> <FaTwitter/></Link></li>
                    <li><Link className={classes.link} to=""> <FaInstagram/></Link></li>
                  </ul>

              </div>

              <div className={classes.NewsPostColumn_bottom_item}>
                <img src={img84} alt="image" className={classes.NewsPostColumn_bottom_item_img}/>
        
                  <div className={classes.NewsPostColumn_bottom_item_info}>           
                    <span class={classes.NewsPostColumn_bottom_item_info_sharing_name}>
                      <Link className={classes.link} to="/shop"> KEVIN LEE</Link>////shop?////
                    </span>
                     <p className={classes.NewsPostColumn_bottom_item_info_job}>Art Director</p>
         
                  </div>
                  <ul className={classes.NewsPostColumn_bottom_item_socialNetworks}>
                    <li><Link className={classes.link} to=""> <FaFacebookF/></Link></li>
                    <li><Link className={classes.link} to=""> <FaTwitter/></Link></li>
                    <li><Link className={classes.link} to=""> <FaInstagram/></Link></li>
                  </ul>

              </div>
       
        </div>
      </section>
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
  )
}

export default About


// import React from 'react'
// // import Menu from "../../menu/menu"
// import Languageoption from "../../language-dropdown"
// import {useTranslation} from 'react-i18next'
// import i18next from "i18next"

// const About = () => {
//   const {t} = useTranslation();
//     const handleClick=(e)=>{
//         i18next.changeLanguage(e.target.value)
//     }

//   return (
//       <div>
//             {/* <Menu/> */}
//             <Languageoption onChange={(e)=> handleClick(e)}/>
//             <h1>{t('welcome')} {t('about')} || Seema {t('holiday')} Developer</h1>
//         </div>
//   )
// }

// export default About
