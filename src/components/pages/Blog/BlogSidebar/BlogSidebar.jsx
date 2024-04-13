import React from 'react'
import classes from "./sidebar.module.scss"
import classNames from 'classnames';
import { Link } from 'react-router-dom';




const Sidebar = () => {

  

  return (
    <>
      <div className={classes.sidebar}>
                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>RECENT POSTS</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                        <Link className={classes.link}>
                            Blog image post
                        </Link>
                        </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>                          
                         <Link className={classes.link}>
                            Post with Gallery 
                         </Link>  
                        </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>                          
                         <Link className={classes.link}>
                           Post with Video
                         </Link>  
                        </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                             Post with  Audio 
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                              Maecenas ultricies
                            </Link>  
                         </h4>
                      </div>

                     

                    </div>
                </div>


                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>RECENT COMMENTS</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                            Admin on Vivamus blandit
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                             Admin on Vivamus blandit
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                            Admin on Vivamus blandit
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                            Admin on Vivamus blandit
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product}>
                            <Link className={classes.link}>
                            Admin on Vivamus blandit
                            </Link>  
                         </h4>
                      </div>

                     

                     

                    </div>
                </div>

                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>ARCHIVES</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             March 2018
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             December 2018
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             November 2018
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             September 2018
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             August 2018
                            </Link>  
                         </h4>
                      </div>

                     

                     

                    </div>
                </div>


                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>CATEGORIES</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Creative
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Fashion
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Image
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Photography
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Travel
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Videos
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             WordPress
                            </Link>  
                         </h4>
                      </div>


                    </div>
                </div>


                <div className={classes.sidebar_card}>
                    <h3 className={classes.sidebar_card_heading}>META</h3>
                    <div className={classes.sidebar_card_catList}>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Log in
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Entries RSS
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             Comments RSS
                            </Link>  
                         </h4>
                      </div>

                      <div className={classes.sidebar_card_catList_catItem}>
                        <h4 className={classes.sidebar_card_catList_catItem_product_2}>
                            <Link className={classes.link}>
                             WordPress.org
                            </Link>  
                         </h4>
                      </div>

                    </div>
                </div>


            </div>
    </>
  )
}

export default Sidebar
