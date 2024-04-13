import React from 'react';
import img69 from "../../../../assets/images/img69.jpg";
import img70 from "../../../../assets/images/img70.jpg";
import img71 from "../../../../assets/images/img71.jpg";
import classes from "./BlogProduct.module.scss";
import { Link } from 'react-router-dom';





const BlogProduct = () => {
  return (
    <>
       <div className={classes.container}>       
      <section className={classes.newsBlogColumn}>
  
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
              <Link className={classes.link} to="/shop"> Jane doe</Link>////shop?////
            </span>


            </span>
            <hr />

        <p className={classes.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
        <br />layout...</p>
            </div>
         


        </div>


        </div>

        <div className={classes.newsBlogColumn_bottom}>
          <img src={img70} alt="image" className={classes.newsBlogColumn_img}/>


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
              <Link className={classes.link} to="/shop"> Jane doe</Link>////shop?////
            </span>


            </span>
            <hr />

        <p className={classes.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
        <br />layout...</p>
            </div>
         


        </div>


        </div>

        <div className={classes.newsBlogColumn_bottom}>
          <img src={img71} alt="image" className={classes.newsBlogColumn_img}/>


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
              <Link className={classes.link} to="/shop"> Jane doe</Link>////shop?////
            </span>


            </span>
            <hr />

        <p className={classes.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
        <br />layout...</p>
            </div>
         


        </div>


        </div>
      </section>
      </div>
      
    </>
  )
}

export default BlogProduct
