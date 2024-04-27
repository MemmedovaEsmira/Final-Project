import React from 'react';
import Sidebar from '../BlogSidebar/BlogSidebar';

import classes from "./blogDetails.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../../assets/images/b-bg7.jpg";
import img2 from "../../../../assets/images/hbdr.png";
import img69 from "../../../../assets/images/img69.jpg";
import img70 from "../../../../assets/images/img70.jpg";
import img14 from "../../../../assets/images/avatar.png";
import img15 from "../../../../assets/images/avatar2.png";
import img16 from "../../../../assets/images/avatar3.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";


const BlogDetails = () => {
  return (
    <div>

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
              <Link to={"/"} className={classes.link}>Blog  /</Link>
            </li>
      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
            Aptent taciti soci litora cianpen
            </li>
            
            </ul>
            </div>
            
            
          </div>

      </section>


      <div className={classes.container}>
      <div className={classes.listingData}>
          <div className={classes.listingData_row}>
             <div className={classes.sidebarWrapper}>
              <Sidebar/>
            </div>


            <div className={classes.listingData_row_rightContent}>

                <div className={classes.newsBlogColumn}>
  
                  <div className={classes.newsBlogColumn_bottom}>
                     <img src={img69} alt="image" className={classes.newsBlogColumn_img}/>

                         <div className={classes.newsBlogColumn_bottom_item}>
                             <span className={classes.newsBlogColumn_bottom_item_img_time}>
                                <h3>20</h3>
                                <p>SEP</p>
                              </span>

                           <div className={classes.newsBlogColumn_bottom_item_info}>
                               <h2 className={classes.title}>Aptent taciti soci litora cianpen</h2>
                                  <span className={classes.newsBlogColumn_bottom_item_info_sharing}>
                                      Post by: 
                                      <span class={classes.newsBlogColumn_bottom_item_info_sharing_name}>
                                        <Link className={classes.link} to="/shop"> Jane doe</Link>
                                      </span>

                                 </span>
                                 <hr />

                                 <p className={classes.text}>
                                 The standard Lorem Ipsum passage, used since the 1500s
                                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                 culpa qui officia deserunt mollit anim id est laborum."
                                </p>

                                <p className={classes.text}>
                                 Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                                 ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                                 voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                                 porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                                 incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                                 corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                                 velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                 </p>
                                 </div>
   


                          </div>

                          


                  </div>

                  <div className={classes.newsBlogColumn_bottom}>
                     <img src={img70} alt="image" className={classes.newsBlogColumn_img}/>

                         <div className={classes.newsBlogColumn_bottom_item}>

                                 <p className={classes.text}>
                                 On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms 
                                 of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal 
                                 blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and 
                                 pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when 
                                 nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain 
                                 circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be 
                                 repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects 
                                 pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                
                                </p>
   

                          </div>

                        
                  </div>

                 </div>
                        

            </div>

            
    
            </div>
         </div>
         <hr />

         <div className={classes.detailsPageTabs_customTabs_tabContent}>

         <div className={classes.socialNetwork }>
            <span>SHARE THIS PRODUCT:</span>
          <ul className={classes.socialNetwork_inline}>
            <li className={classes.socialNetwork_inline_item}>
              <Link className={classes.link} to={''}><FaFacebookF /></Link>
            </li>
            <li className={classes.socialNetwork_inline_item}>
              <Link className={classes.link} to={''}><IoLogoGoogleplus /></Link>
            </li>
            <li className={classes.socialNetwork_inline_item}>
              <Link className={classes.link} to={''}><FaTwitter /></Link>
            </li>
            <li className={classes.socialNetwork_inline_item}>
              <Link className={classes.link} to={''}><FaPinterest /></Link>
            </li>

          </ul>
        </div>
            <div className={classes.detailsPageTabs_customTabs_tabContent_commentsBlock}>

               <h3>3 COMMENTS</h3>

              <div className={classes.reviewsCard}>
                <div className={classes.reviewsCard_img}>
                  <img src={img14} alt="" />
                </div>

               
                <div className={classes.reviewsCard_info}>
                  <div className={classes.reviewsCard_info_up}>
                   <span className={classes.name}>Admin</span>
                    <p className={classes.date}>
                       Post authorOctober 6, 2014 at 1:38 am
                    </p>
                  </div>
                  
                  <span className={classes.reviewsCard_info_text}>
                    just a nice post
                  </span>

                </div>

              </div>

              <div className={classes.reviewsCard}>
                <div className={classes.reviewsCard_img}>
                  <img src={img15} alt="" />
                </div>

               
                <div className={classes.reviewsCard_info}>
                  <div className={classes.reviewsCard_info_up}>
                   <span className={classes.name}>Admin</span>
                    <p className={classes.date}>
                       Post authorOctober 6, 2014 at 1:38 am
                    </p>
                  </div>

                  <span className={classes.reviewsCard_info_text}>
                     Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur
                   </span>
                  

                </div>

              </div>


              <div className={classes.reviewsCard}>
                <div className={classes.reviewsCard_img}>
                  <img src={img16} alt="" />
                </div>

               
                <div className={classes.reviewsCard_info}>
                  <div className={classes.reviewsCard_info_up}>
                   <span className={classes.name}>Admin</span>
                    <p className={classes.date}>
                       Post authorOctober 6, 2014 at 1:38 am
                    </p>
                  </div>
                  
                  <span className={classes.reviewsCard_info_text}>
                     Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec Quisque orci nibh, 
                     porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec
                  </span>

                </div>

              </div>


            
            </div>
            

          </div>

<hr />

              </div>


      <div className={classes.container}>       
          <div className={classes.reviewForm}>
            <h2 className={classes.reviewForm_heading}>LEAVE A COMMENT</h2>

            <div className={classes.reviewForm_group}>
              <textarea className={classes.reviewForm_group_control} placeholder='comment'
              //  name="review" value={reviewFields.review} onChange={(e) => changeInput(e.target.name, e.target.value)}
               >
              </textarea>

            </div>

            <div className={classes.reviewForm_group_item}>

                <div className={classes.reviewForm_group_item_input}>   
                <label for={'name'} >Name *</label>           
                   <input  className={classes.reviewForm_group_item_input_control} id={'name'} type={"text"} />
                </div>

                <div className={classes.reviewForm_group_item_input}>   
                <label for={'email'} >Email *</label>             
                   <input className={classes.reviewForm_group_item_input_control} id={'email'}  type={"email "} />
                </div>

                <div className={classes.reviewForm_group_item_input}>     
                <label for={'website'} >Website *</label>             
                   <input className={classes.reviewForm_group_item_input_control}  id={'website'} type={"text"} />
                </div>

            </div>

            

            <div className={classes.reviewForm_group}>
              <button  className={classes.reviewForm_group_btn}>
                Shop Now 
                <FaArrowRight />              
              </button>
            </div>

          </div>


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
            <input className={classes.newsLetterSection_banner_input} type={"email"} placeholder={"Enter your mail..."}/>
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

export default BlogDetails;
