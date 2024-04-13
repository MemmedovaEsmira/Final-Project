import React, {useRef, useState} from 'react';

import img7 from "../../../../assets/images/b-bg7.jpg";
import img2 from "../../../../assets/images/hbdr.png";
import img3 from "../../../../assets/images/img58.jpg";
import img4 from "../../../../assets/images/img59.jpg";
import img5 from "../../../../assets/images/img60.jpg";
import img6 from "../../../../assets/images/img61.jpg";
import img8 from "../../../../assets/images/img62.jpg";
import img9 from "../../../../assets/images/img63.jpg";
import img10 from "../../../../assets/images/img64.jpg";
import img11 from "../../../../assets/images/img65.jpg";
import img12 from "../../../../assets/images/img66.jpg";
import img13 from "../../../../assets/images/img67.jpg";
import img14 from "../../../../assets/images/img68.jpg";
import img15 from "../../../../assets/images/avatar.png";
import img16 from "../../../../assets/images/avatar3.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";





import { FaArrowRight } from "react-icons/fa";

import classes from "./details.module.scss";
import { NavLink, Link } from 'react-router-dom';
import Product from '../../../product/product';
import { Style } from 'react-style-tag';
import Rating from '@mui/material/Rating'

import Slider from 'react-slick';

// import { useDispatch } from 'react-redux';
// import {addItem, delItem} from '../../../../redux/actions/index'





const Details = () => {

  const [zoomImage, setZoomImage] =useState('https://htmlbeans.com/html/botanical/images/img58.jpg');

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState(0);

  const [inputValue, setinputValue] = useState(1);

  const [activeTabs, setActiveTabs] = useState(1);





  const goto=(url)=>{
    setZoomImage(url);
  }

  const isActive=(index)=>{
    setActiveSize(index);
  }


  const plus = () => {
    setinputValue(inputValue + 1)
}

const minus = () => {
    if (inputValue !== 1) {
        setinputValue(inputValue - 1)
    }
}
  
   const zoomSlider=useRef();

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    arrow: false
  };

  // const [CartBtn, setCartBtn] = useState("Add to cart")

  // const dispatch = useDispatch()

  // const handleCart = (product) => {
  //     if (CartBtn === "Add to Cart") {
  //         dispatch(addItem(product))
  //         setCartBtn("Remove from Cart")
  //     }
  //     else{
  //         dispatch(delItem(product))
  //         setCartBtn("Add to Cart")
  //     }
  // }


  return (
  <>

    <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> Shop</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}> Home </Link>
            </li>

            
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/shop"} className={classes.link}> /   Shop   /</Link>
            </li>
       
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
                Pellentesque aliquet
            </li>
            
            </ul>
            </div>
            
    </div>

    <div className={classes.container}>
      <section className={classes.detailsPage}>

      <div className={classes.detailsPage_product}>

          <div className={classes.detailsPage_product_SliderImage } >
            <img src={`${zoomImage}?im=Resize=(${bigImageSize[1500]},${bigImageSize[1500]})`} alt="" />
          </div>

          <div className={classes.detailsPage_product_TextHolder}>
           <h2  className={classes.detailsPage_product_TextHolder_title}>Pellentesque aliquet</h2>

            <div className={classes.detailsPage_product_TextHolder_ratingList }>
               <Rating name = "half-rating-read" defaultValue={4} precision={1}readOnly />
               <span>( 5 customer reviews )</span>

            </div>
               <div className={classes.detailsPage_product_TextHolder_price}>
                 <span>65.00 $</span>
                 </div>

              <span className={classes.detailsPage_product_TextHolder_info}>
                Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. Vestibulum lacinia risus.
              </span>

              <ul className={classes.detailsPage_product_TextHolder_productInfoDetail}>
                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>Product Code: <span>FA008</span></li>
                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>Quantity: <span>68 Items</span></li>
                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>Shipping tax: <span> Free</span></li>

              </ul>



              {/* <div className={classes.detailsPage_product_TextHolder_productSize}>
                <span>SIZE:</span>
            
                <ul className={classes.detailsPage_product_TextHolder_productSize_list}>
                  <li className={classes.detailsPage_product_TextHolder_productSize_list_inline_item}> 
                    <a className={`${activeSize===0 ? 'active':''}`} onClick={()=>isActive(0)}>L</a>
                  </li>

                  <li className={classes.detailsPage_product_TextHolder_productSize_list_inline_item}> 
                  <a className={`tag ${activeSize===1 ? 'active':''}`} onClick={()=>isActive(1)}>M</a>
                  </li>

                  <li className={classes.detailsPage_product_TextHolder_productSize_list_inline_item}> 
                  <a className={`tag ${activeSize===2 ? 'active':''}`} onClick={()=>isActive(2)}>S</a>       
                  </li>

                  <li className={classes.detailsPage_product_TextHolder_productSize_list_inline_item}> 
                  <a className={`tag ${activeSize===3 ? 'active':''}`} onClick={()=>isActive(3)}>XL</a>                   
                  </li>

                  <li className={classes.detailsPage_product_TextHolder_productSize_list_inline_item}> 
                  <a className={`tag ${activeSize===4 ? 'active':''}`} onClick={()=>isActive(4)}>XXL</a>                 
                  </li>
                  
                </ul>
                

                <ul className={classes.detailsPage_product_TextHolder_productSize_color}>
                <li className={classes.detailsPage_product_TextHolder_productSize_color_list}> Color:</li>
                  <li className={classes.detailsPage_product_TextHolder_productSize_color_item}>

                  </li>


                </ul>
              </div> */}

              <div className={classes.detailsPage_product_TextHolder_addCartSection}>
                <div className={classes.detailsPage_product_TextHolder_addCartSection_counterSec}>             
                 <button className={classes.detailsPage_product_TextHolder_addCartSection_counterSec_decrement} onClick={minus}>-</button>
                  <input  className={classes.detailsPage_product_TextHolder_addCartSection_counterSec_value} value={inputValue} type='number'/> 
                  <button className={classes.detailsPage_product_TextHolder_addCartSection_counterSec_increment} onClick={plus}>+</button>
                </div>

                <NavLink  to={"/pages"} className={classes.detailsPage_product_TextHolder_addCartSection_btn }>
               <button>

                <FaArrowRight />
               </button>

         
                </NavLink>

                </div>

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

              <ul className={classes.detailsPage_product_TextHolder_productInfoDetail}>
                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>
                  Categories:
                  <Link className={classes.link} to={''}><p>Butter & Eggs,</p></Link>
                  <Link className={classes.link} to={''}><p>Fruits,</p></Link>
                  <Link className={classes.link} to={''}><p>Milk & Cream,</p></Link>
                  <Link className={classes.link} to={''}><p>Vegetables</p></Link>
                </li>

                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>
                  Tags: 
                  <Link className={classes.link} to={''}><p>organic food,</p></Link>
                  <Link className={classes.link} to={''}><p>fruits,</p></Link>
                  <Link className={classes.link} to={''}><p>juice</p></Link>
                </li>
                <li className={classes.detailsPage_product_TextHolder_productInfoDetail_list}>
                   Brand:  
                  <Link className={classes.link} to={''}><p>KFC</p></Link>
                  
                </li>

              </ul>



              

          </div>
      </div>


          <Slider {...settings} className={classes.detailsPage_imgSlider} ref={zoomSlider} >

          
            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img59.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="" 
             onClick={() => goto('https://htmlbeans.com/html/botanical/images/img59.jpg')} />
            </div>

            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img60.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt="" 
             onClick={() => goto('https://htmlbeans.com/html/botanical/images/img60.jpg')} />
            </div>

            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img61.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt=""  
            onClick={() => goto('https://htmlbeans.com/html/botanical/images/img61.jpg')} />
            </div>

            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img62.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt=""  
            onClick={() => goto('https://htmlbeans.com/html/botanical/images/img62.jpg')} />
            </div>

            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img63.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt=""  
            onClick={() => goto('https://htmlbeans.com/html/botanical/images/img63.jpg')} />
            </div>

            <div className={classes.detailsPage_imgSlider_item}>
            <img src={`https://htmlbeans.com/html/botanical/images/img64.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} alt=""  
            onClick={() => goto('https://htmlbeans.com/html/botanical/images/img64.jpg')} />
            </div>


            

          
            </Slider>

      </section>

    </div>  

    
    <div className={classes.container}>
       <section className={classes.detailsPageTabs}>
        <div className={classes.detailsPageTabs_customTabs}>
          <ul  className={classes.detailsPageTabs_customTabs_list}>
            <li  className={classes.detailsPageTabs_customTabs_list_item } onClick={()=>setActiveTabs(0)}>
                Description
            </li>

            <li  className={classes.detailsPageTabs_customTabs_list_item} onClick={()=>setActiveTabs(1)}>
            Reviews ( 2 )
            </li>

          </ul>

       {
         activeTabs === 0 &&

          <div className={classes.detailsPageTabs_customTabs_tabContent}>
            <span>
            Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis ullamcorper volutpat. Vestibulum lacinia risus sed 
            ligula malesuada volutpat.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
            tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo Pellentesque habitant morbi tristique senectus et 
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean 
            ultricies mi vitae est. Mauris placerat eleifend leo.
            </span>

          </div>
        }   


         {
         activeTabs === 1  &&

          <div className={classes.detailsPageTabs_customTabs_tabContent}>
            <div className={classes.detailsPageTabs_customTabs_tabContent_commentsBlock}>
               <h3>Customer questions & answers</h3>

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
                    just a nice post
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
        }          

        </div>

       </section>
    
    </div>

    <div className={classes.container}>       
      <section className={classes.productRow}>
        <div className={classes.productRow_header}>
          <h1 className={classes.productRow_header_title}>Related products</h1>

          <div className={classes.productRow_header_img}>
          <img src={img2} alt="" />
          </div>

          <span className={classes.productRow_header_info}>
          There are many variations of passages of lorem ipsum available
          </span>

        </div>
        <div className={classes.productRow_bottom}>

        <div className={classes.productRow_bottom_item}>
        <Product  className={Style.sale} tag="sale"/>     
        </div>
        {/* <div className={classes.productRow_bottom_item}>
        <Product />
        </div>
        <div className={classes.productRow_bottom_item}>
        <Product className={Style.hot} tag="hot"/>
        </div>
        <div className={classes.productRow_bottom_item}>
        <Product  className={Style.sale} tag="sale"/>
        </div> */}
       
        </div>
      </section>
      </div >


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
export default  Details;