import React from 'react';
import classes from "./pages.module.scss";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img7 from "../../../assets/images/b-bg7.jpg";
import img2 from "../../../assets/images/hbdr.png";
// import CartBtn from '../../buttons/CartBtn';

// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// // import {delItem} from '../../../redux/actions/index'
// import { NavLink } from 'react-router-dom'


const Pages = () => {

//   const state = useSelector((state)=> state.addItem)
//   const dispatch = useDispatch()

//   const handleClose = (item) => {
//       dispatch(delItem(item))
//   }

//   const cartItems = (cartItem) => {
//     return(
//         <div className={classes.container} key={cartItem.id}>
//             <div className={classes.container }>
//                 <button onClick={()=>handleClose(cartItem)} className={classes.btn-close} ></button>
//                 <div className={classes.row }>
//                     <div className={classes.col}>
//                         <img src={cartItem.img} alt={cartItem.title} />
//                     </div>
//                     <div className={classes.col}>
//                         <h3>{cartItem.title}</h3>
//                         <p className={classes.lead}>${cartItem.price}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const emptyCart = () => {
//   return (
   
//           <div className={classes.container}>
//               <div className={classes.row}>
//                   <h3>Your Cart is Empty</h3>
//               </div>
//               </div>
       
//   );
// }

// const button = () => {
//   return(
//       <div className={classes.container}>
//           <div className={classes.row}>
//               <NavLink to="/checkout" className={classes.btn}>Proceed To checkout</NavLink>
//           </div>
//       </div>
//   );
// }
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

      {/* {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()} */}
  

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


