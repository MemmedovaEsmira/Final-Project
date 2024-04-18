import React from 'react'
import classes from "./footer.module.scss"
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";


const footer = () => {
  return <>

  <div className={classes.container}>
<footer className={classes.footer}>
    <div className={classes.footer_row}>
      <div className={classes.footer_row_part1}>
      <div className={classes.footer_row_part1_col}>
        <h3>CONTACT US</h3>
          <span><MdOutlineLocationOn /> <h4>Address:</h4>London Oxford Street, 012 United Kingdom.</span>
          <span><FiPhone /> <h4>Phone:</h4>  (+032) 3456 7890</span>
          <span><MdOutlineEmail /> <h4>Email:</h4>  Botanicalstore@gmail.com </span>
      </div>
        <div className={classes.footer_row_part1_list}>
            <h4>Follow Us:</h4>
          <ul className={classes.footer_row_part1_list_inline}>
            <li className={classes.footer_row_part1_list_inline_item}>
              <Link className={classes.link} to={''}><FaFacebookF /></Link>
            </li>
            <li className={classes.footer_row_part1_list_inline_item}>
              <Link className={classes.link} to={''}><FaTwitter /></Link>
            </li>
            <li className={classes.footer_row_part1_list_inline_item}>
              <Link className={classes.link} to={''}><IoLogoGoogleplus /></Link>
            </li>
            <li className={classes.footer_row_part1_list_inline_item}>
              <Link className={classes.link} to={''}><FaPinterest /></Link>
            </li>

          </ul>
        </div>

      </div>


      <div className={classes.footer_row_part2}>
          <div className={classes.footer_row_part2_col}>
            <h3>INFORMATION</h3>
            <ul class={classes.footer_row_part2_col_list}>
              <li><Link className={classes.link} to="#">New Products</Link></li>
              <li><Link className={classes.link} to="#">Top Sellers</Link></li>
              <li><Link className={classes.link} to="#">Our Blog</Link></li>
              <li><Link className={classes.link} to="#">About Our Shop</Link></li>
              <li><Link className={classes.link} to="#">Privacy policy</Link></li>
              </ul>
          </div>

          <div className={classes.footer_row_part2_col}>
            <h3>MY ACCOUNT</h3>
            <ul class={classes.footer_row_part2_col_list}>
                <li><Link className={classes.link} to="#">My account</Link ></li>
                <li><Link className={classes.link} to="#">Discount</Link></li>
                <li><Link className={classes.link} to="#">Orders history</Link></li>
                <li><Link className={classes.link} to="#">Personal information</Link></li>
              </ul>
          </div>

          <div className={classes.footer_row_part2_col}>
            <h3>POPULAR TAG</h3>
            <ul class={classes.footer_row_part2_col_tagNavList}>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Trend</Link></li>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Decor</Link></li>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Plant</Link></li>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Table tree</Link></li>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Bedroom tree</Link></li>
                <li class={classes.footer_row_part2_col_tagNavList_item}><Link className={classes.link} to="#">Living room</Link></li>
              </ul>
          </div>

          

      </div>


       </div>

<hr />

  <div className={classes.footer_row_lastStrip}>
    <p>Coppyright 2019 by Botanical Store - All right reserved</p>
  </div>

</footer>
</div>
  
  </>
}

export default footer
