import React, { useState } from 'react'
import classes from "./sidebar.module.scss"
import classNames from 'classnames';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import img53 from "../../../../assets/images/img53.jpg";
import productData from "../../../../data";


function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = () => {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [data,setData]=useState(productData)
  const filterResult=(catItem)=>{
    const result =productData.filter((curData)=>{
      return curData.category===catItem;
    });
    setData(result);
  }

  return (
    <>
      <div className={classes.sidebar}>
              <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>PRODUCT CATEGORIES</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>Dried </h4>
                        <span className={classes.sidebar_card_catList_catItem_num}>6</span>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>Dried </h4>
                        <span className={classes.sidebar_card_catList_catItem_num}>6</span>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>Dried </h4>
                        <span className={classes.sidebar_card_catList_catItem_num}>6</span>
                      </div>

                     

                    </div>
              </div>


              <div className={classes.sidebar_card}>
                <h3 className={classes.sidebar_card_heading}>FILTER BY PRICE</h3>
                <Slider
                 min={0}
                 step={1}
                 max={100}
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color='secondary'
                  />

                    
                    <div className={classes.sidebar_card_priceRange}>

                    <div className={classes.sidebar_card_priceRange}>
                      <button className={classes.sidebar_card_priceRange_btn}  
                      onClick={() => context.openFilters()}> FILTER</button>
                    </div>
                     
                    <span className={classes.sidebar_card_priceRange_price}>Price :
                      <p> ${value[0]} </p>
                      <p> -  ${value[1]}</p>
                    </span>
            
                    </div>







              </div>

              <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>TOP RATE</h3>
                    <div className={classes.sidebar_card_recentList}>

                    <div className={classes.sidebar_card_recentList_item}>
                        <img src={img53} alt="image description" className={classes.sidebar_card_recentList_item_img}/>

                        <div className={classes.sidebar_card_recentList_item_product}>
                          <h4 className={classes.sidebar_card_recentList_item_product_title}>Vitamin C face wash </h4>
                          <span className={classes.sidebar_card_recentList_item_product_price}>21.00 $</span>
                        </div>
                    </div>

                    <div className={classes.sidebar_card_recentList_item}>
                        <img src={img53} alt="image description" className={classes.sidebar_card_recentList_item_img}/>

                        <div className={classes.sidebar_card_recentList_item_product}>
                          <h4 className={classes.sidebar_card_recentList_item_product_title}>Vitamin C face wash </h4>
                          <span className={classes.sidebar_card_recentList_item_product_price}>21.00 $</span>
                        </div>
                    </div>

                    <div className={classes.sidebar_card_recentList_item}>
                        <img src={img53} alt="image description" className={classes.sidebar_card_recentList_item_img}/>

                        <div className={classes.sidebar_card_recentList_item_product}>
                          <h4 className={classes.sidebar_card_recentList_item_product_title}>Vitamin C face wash </h4>
                          <span className={classes.sidebar_card_recentList_item_product_price}>21.00 $</span>
                        </div>
                    </div>

                     


                    </div>
                </div>

                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>PRODUCT TAGS</h3>
                    <ul className={classes.sidebar_card_tagNavList}>

                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Plant')}>Plant</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Floor')}>Floor</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Indoor')}>Indoor</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Green')}>Green</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Healthy')}>Healthy</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Cactus')}>Cactus</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('House plant')}>House plant</li>
                      <li className={classes.sidebar_card_tagNavList_item} onClick={()=>filterResult('Office tree')}>Office tree</li> 

                    </ul>
                </div>


            </div>
    </>
  )
}

export default Sidebar
