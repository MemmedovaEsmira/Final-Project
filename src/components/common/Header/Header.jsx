import React, { useState } from 'react';
import classes from "./header.module.scss"
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import { VscMenu } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

// import { RootState } from '../../redux/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleActive } from '../../Store/isActiveSlice';

// import { MdOutlineMenu } from "react-icons/md";

import Languageoption from '../../language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next";
// import CartBtn from '../../buttons/CartBtn';



const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
  const [isOpenDropDown3, setisOpenDropDown3] = useState(false);
  const [isOpenDropDown4, setisOpenDropDown4] = useState(false);
  const [isOpenDropDown5, setisOpenDropDown5] = useState(false);
  const [isOpenDropDown6, setisOpenDropDown6] = useState(false);

  // const dispatch = useDispatch()
  // const cart = useSelector((state: RootState) => state.addToCartReducer.items)
  // const totalCount = cart.reduce((acc, curr) => acc + curr.count, 0)







  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
    <>
    <div className={classes.container}>
    <header className={classes.header}>
    <VscMenu />


      <Languageoption onChange={(e)=> handleClick(e)}/>


  <ul className={classes.header_menu}>
      <li className={classes.header_menu_item}>
       <NavLink to={"/"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown(!isOpenDropDown)}> Home </NavLink>

      {
             isOpenDropDown !== false &&

       <div className={classes.header_menu_item_dropdown}>
          <Link className={classes.link} to={"/"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown(false)}>Home 1 </li></Link>
          <Link className={classes.link} to={"/Home2"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown(false)}>Home 2 </li></Link>
          <Link className={classes.link} to={"/Home3"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown(false)}>Home 3 </li></Link>
       </div>
      }
      </li>

      <li className={classes.header_menu_item}>
       <NavLink to={"/shop"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Store </NavLink>

    {
          isOpenDropDown2 !== false &&

         <div className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/shop"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown2(false)}>Shop Left Sidebar </li></Link>
          <Link className={classes.link} to={"/shop-details"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown2(false)}>Single Product </li></Link>
        </div> 
    }    
      </li>




      <li className={classes.header_menu_item}>
       <NavLink to={"/about"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown3(!isOpenDropDown3)}> About </NavLink>

    {
       isOpenDropDown3 !== false &&

         <div className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/about"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown3(false)}></li></Link>
        </div> 
    }    
      </li>


      <li>
      <NavLink to={"/"} className={classNames(classes["header_menu_item--link"])}>
       <img src={logo} alt="logo"/>
      </NavLink>
       </li>


<li className={classes.header_menu_item}>
       <NavLink to={"/blog"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown4(!isOpenDropDown4)}> Blog </NavLink>

    {
          isOpenDropDown4 !== false &&

         <div className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/blog"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown4(false)}>Blog Left Sidebar </li></Link>
          <Link className={classes.link} to={"/blog-details"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown4(false)}> Blog Detail </li></Link>
        </div> 
    }    
      </li>


    
      <li className={classes.header_menu_item}>
       <NavLink to={"/pages"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown5(!isOpenDropDown5)}> Pages </NavLink>

    {
       isOpenDropDown5 !== false &&

         <div className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/pages"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown5(false)}>Cart Page</li></Link>
        </div> 
    }    
      </li>



      <li className={classes.header_menu_item}>
       <NavLink to={"/contact"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown6(!isOpenDropDown6)}> Contact </NavLink>

    {
       isOpenDropDown6 !== false &&

         <div className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/contact"}>  <li  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown6(false)}></li></Link>
        </div> 
    }    
      </li>
      
     </ul>

<div className={classes.header_icons}>

     <TfiSearch />
     <CiHeart />
{/* 
                    <button className={classes['header_container_cart_button']}>
                         <TiShoppingCart className={classes.icon} onClick={
                            () => dispatch(handleActive())} />
                             {cart.length > 0 ? <span>{totalCount}</span> : null}
                    </button> */}


      <li className={classes.header_menu_item}>
       <NavLink to={"/pages"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown5(!isOpenDropDown5)}> <PiShoppingCartLight/> </NavLink>

  
      </li>                  
</div>




    </header>
     </div>
    </>
  )
}

export default Header;







