import React from 'react';
import { useSelector } from 'react-redux';
import classes from "./checkout.module.scss"


const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    let total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className={classes.list_group_item}>
                <div>
                    <h6>{item.title}</h6>
                </div>
                <span className={classes.text_muted}>${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <h4 className={classes.col_info}>
                            <span className={classes.text}>Your cart</span>
                            <span className={classes.badge}>{state.length}</span>
                        </h4>
                        <ul className={classes.list_group}>
                            {state.map(itemList)}

                            <li className={classes.list_group_item}>
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className={classes.card}>
                            <div className={classes.input_group}>
                                <input type="text" className={classes.form_control} placeholder="Promo code" />
                                <button  className={classes.btn}>Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.col}>
                    <h4 className={classes.col_info}>Billing address</h4>
                        <form className={classes.needs_validation}>
                        {/* novalidate="" */}
                            <div className={classes.row}>
                                <div className={classes.col}>
                                    <label htmlFor="firstName" className={classes.form_label}>First name</label>
                                    <input type="text" className={classes.form_control} id="firstName" placeholder="" value="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="lastName" className={classes.form_label}>Last name</label>
                                    <input type="text" className={classes.form_control} id="lastName" placeholder="" value="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="username" className={classes.form_label}>Username</label>
                                    <div className={classes.input_group}>
                                        <span className={classes.input_group_text}>@</span>
                                        <input type="text" className={classes.form_control} id="username" placeholder="Username" required="" />
                                        <div className={classes.invalid_feedback}>
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="email" className={classes.form_label}>Email <span className={classes.text_muted}>(Optional)</span></label>
                                    <input type="email" className={classes.form_control} id="email" placeholder="you@example.com" />
                                    <div className={classes.invalid_feedback}>
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="address" className={classes.form_label}>Address</label>
                                    <input type="text" className={classes.form_control} id="address" placeholder="1234 Main St" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="address2" className={classes.form_label}>Address 2 <span className={classes.text_muted}>(Optional)</span></label>
                                    <input type="text" className={classes.form_control} id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="country" className={classes.form_label}>Country</label>
                                    <select className={classes.form_select} id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className={classes.invalid_feedback}>
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="state" className={classes.form_label}>State</label>
                                    <select className={classes.form_select} id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className={classes.invalid_feedback}>
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="zip" className={classes.form_label}>Zip</label>
                                    <input type="text" className={classes.form_control} id="zip" placeholder="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div className={classes.form_check}>
                                <input type="checkbox" className={classes.form_check_input} id="same-address" />
                                <label className={classes.form_check_label} htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className={classes.form_check}>
                                <input type="checkbox" className={classes.form_check_input} id="save-info" />
                                <label className={classes.form_check_label} htmlFor="save-info">Save this information htmlFor next time</label>
                            </div>

                            <hr/>

                            <h4 className={classes.col_info}>Payment</h4>

                            <div className={classes.form}>
                                <div className={classes.form_check}>
                                    <input id="credit" name="paymentMethod" type="radio" className={classes.form_check_input} checked="" required="" />
                                    <label className={classes.form_check_label} htmlFor="credit">Credit card</label>
                                </div>
                                <div className={classes.form_check}>
                                    <input id="debit" name="paymentMethod" type="radio" className={classes.form_check_input} required="" />
                                    <label className={classes.form_check_label} htmlFor="debit">Debit card</label>
                                </div>
                                <div className={classes.form_check}>
                                    <input id="paypal" name="paymentMethod" type="radio" className={classes.form_check_input} required="" />
                                    <label className={classes.form_check_label} htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div className={classes.col}>
                                    <label htmlFor="cc-name" className={classes.form_label}>Name on card</label>
                                    <input type="text" className={classes.form_control} id="cc-name" placeholder="" required="" />
                                    <small className={classes.text_muted}>Full name as displayed on card</small>
                                    <div className={classes.invalid_feedback}>
                                        Name on card is required
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="cc-number" className={classes.form_label}>Credit card number</label>
                                    <input type="text" className={classes.form_control} id="cc-number" placeholder="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="cc-expiration" className={classes.form_label}>Expiration</label>
                                    <input type="text" className={classes.form_control} id="cc-expiration" placeholder="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Expiration date required
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <label htmlFor="cc-cvv" className={classes.form_label}>CVV</label>
                                    <input type="text" className={classes.form_control} id="cc-cvv" placeholder="" required="" />
                                    <div className={classes.invalid_feedback}>
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <button className={classes.btn} >Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout