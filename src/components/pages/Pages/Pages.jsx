import React from 'react';
import { useSelector } from 'react-redux';
import classes from "./pages.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";

import CartItem from "../../CartItem/CartItem"



const Pages = () => {

  const cart = useSelector(state => state.cart)
  console.log(cart)

  



  
  return (
    <div>

<section className={classes.introBannerHolder }>
      <div className={classes.container}>
      <div className={classes.introBannerHolder_listingPage}>
          <img src={img7} alt="image" className={classes.introBannerHolder_listingPage_img}/>
          
          <div className={classes.introBannerHolder_listingPage_breadCrumbs}>         
          <h1 className={classes.introBannerHolder_listingPage_breadCrumbs_title}> Pages</h1>
          <ul className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline}>

          <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Home  /</Link>
            </li>

            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
              <Link to={"/"} className={classes.link}>Shop  /</Link>
            </li>

      
            <li className={classes.introBannerHolder_listingPage_breadCrumbs_list_inline_item}>
            My Cart
            </li>
            
            </ul>
            </div>
            
            
          </div>

      </div>
      </section>
   



  <div className={classes.container}>
  <div className={classes.row}>
      {cart?.list && cart?.list?.length > 0 ? (
          <div>
              <header>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                  </tr>
              </header>
              <div >
                  {
                      cart?.list.map(item => {
                          return (
                              <CartItem 
                                  key={item?.id}
                                  data={item}
                              />
                          )
                      })
                  }
                  <tr>
                      <td colSpan={3}>Total:</td>
                      <td colSpan={1}>{cart?.total}$</td>
                      <td></td>
                  </tr>
              </div>
          </div>
      ) : <h1>Empty</h1>}
  </div >
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

export default Pages;


