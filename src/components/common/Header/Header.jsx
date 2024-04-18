import React, { useState } from 'react';
import classes from "./header.module.scss";

import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import { TfiSearch } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";


import Languageoption from '../../language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next";


import { useSelector } from 'react-redux';




const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
  const [isOpenDropDown3, setisOpenDropDown3] = useState(false);
  const [isOpenDropDown4, setisOpenDropDown4] = useState(false);
  const [isOpenDropDown5, setisOpenDropDown5] = useState(false);
  const [isOpenDropDown6, setisOpenDropDown6] = useState(false);


const {list} = useSelector(state => state.cart)




  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
    <>
    <div className={classes.container}>
    <header className={classes.header}>
    <div className={classes.header_logo}>
      <NavLink to={"/"} className={classNames(classes["header_menu_item--link"])}>
       <img src={logo} alt="logo"/>
      </NavLink>
     </div>
    <div className={classes.header_icons}>
      <Languageoption onChange={(e)=> handleClick(e)}/>
    </div>

  <div className={classes.header_menu}>


  <div className={classes.header_menu_item}>
      <NavLink to={"/login"} className={classNames(classes["header_menu_item--link"])}>
       Login
      </NavLink>
     </div>


      <div className={classes.header_menu_item}>
       <NavLink to={"/"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown(!isOpenDropDown)}> Home </NavLink>

      {
             isOpenDropDown !== false &&

       <span className={classes.header_menu_item_dropdown}>
          <Link className={classes.link} to={"/"}>  <p className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown(false)}>Home 1 </p></Link>
          <Link className={classes.link} to={"/Home2"}>  <p className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown(false)}>Home 2 </p></Link>
       </span>
      }
      </div>

      <div className={classes.header_menu_item}>
       <NavLink to={"/shop"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown2(!isOpenDropDown2)}> Store </NavLink>

    {
          isOpenDropDown2 !== false &&

         <span className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/shop"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown2(false)}>Shop Left Sidebar </p></Link>
          <Link className={classes.link} to={"/shop-details"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown2(false)}>Single Product </p></Link>
        </span> 
    }    
    </div>




      <div className={classes.header_menu_item}>
       <NavLink to={"/about"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown3(!isOpenDropDown3)}> About </NavLink>

    {
       isOpenDropDown3 !== false &&

         <span className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/about"}>  <p className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown3(false)}></p></Link>
        </span> 
    }    
    </div>

  
  <div className={classes.header_menu_item}>
       <NavLink to={"/blog"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown4(!isOpenDropDown4)}> Blog </NavLink>

    {
          isOpenDropDown4 !== false &&

         <span className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/blog"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown4(false)}>Blog Left Sidebar </p></Link>
          <Link className={classes.link} to={"/blog-details"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown4(false)}> Blog Detail </p></Link>
        </span> 
    }    
    </div>


    
      <div className={classes.header_menu_item}>
       <NavLink to={"/pages"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown5(!isOpenDropDown5)}> Pages </NavLink>

    {
       isOpenDropDown5 !== false &&

         <span className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/pages"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown5(false)}>Cart Page</p></Link>
        </span> 
    }    
    </div>



      <div className={classes.header_menu_item}>
       <NavLink to={"/contact"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown6(!isOpenDropDown6)}> Contact </NavLink>

    {
       isOpenDropDown6 !== false &&

         <span className={classes.header_menu_item_dropdown}>
           <Link className={classes.link} to={"/contact"}>  <p  className={classes.header_menu_item_dropdown_li} onClick={() => setisOpenDropDown6(false)}></p></Link>
        </span> 
    }    
    </div>
      
     </div>

<div className={classes.header_icons}>

     <TfiSearch />

     <div className={classes.header_menu_item}>
       <NavLink to={"/wishlists"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown5(!isOpenDropDown5)}> <CiHeart/>
          <span>{list?.length}</span>
        </NavLink>

    </div>  

      <div className={classes.header_menu_item}>
       <NavLink to={"/pages"} className={classNames(classes["header_menu_item--link"])}
         onClick={() => setisOpenDropDown5(!isOpenDropDown5)}> <TiShoppingCart/>
          <span>{list?.length}</span>
        </NavLink>

    </div>                  
</div>




    </header>
     </div>
    </>
  )
}

export default Header;







