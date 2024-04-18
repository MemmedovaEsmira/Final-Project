import React,{ useState} from 'react';
import classes from"./login.module.scss";
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope  } from "react-icons/fa";




const Login = () => {

  const [action, setAction] = useState('');
  const registerLink = ( )=> {
   setAction("active");
  };

  const loginLink = ( )=> {
    setAction("active");
   };


  return (
    <>
    {/* <div className={`classes.container ${action}`}> */}
    <div className={classes.container}>

      <div className={classes.form_box_login}>

      <form action="" >
      <h1>Login</h1>
      <div className={classes.input_box}>
        <input type="text" placeholder='Username' required/>
        <FaUser className={classes.input_box_icon}/>

      </div>

      <div className={classes.input_box}>
        <input type="password" placeholder='Password' required/>
        <FaLock className={classes.input_box_icon}/>

      </div>

      <div className={classes.remember_forgot}>
        <label >
          <input type="checkbox"/>
          Remember me
        </label>
        <Link className={classes.link}>Forgot password</Link>
      </div>

      <button className={classes.form_btn} > Login</button>

      <div className={classes.register_link}>
         <p>Don't have an account? 
           <Link className={classes.link} onClick={registerLink}>  Register</Link> </p>
      </div>


      </form>
      </div>

<div className={classes.form_box_register}>

<form action="" >
<h1>Registration</h1>
<div className={classes.input_box}>
  <input type="text" placeholder='Username' required/>
  <FaUser className={classes.input_box_icon}/>

</div>

<div className={classes.input_box}>
  <input type="email" placeholder='email' required/>
  <FaEnvelope className={classes.input_box_icon}/>

</div>

<div className={classes.input_box}>
  <input type="password" placeholder='Password' required/>
  <FaLock className={classes.input_box_icon}/>

</div>

<div className={classes.remember_forgot}>
  <label >
    <input type="checkbox"/>
    I agree to the terms & conditions
  </label>
  <Link className={classes.link}>Forgot password</Link>
</div>

<button className={classes.form_btn} >Register</button>

<div className={classes.register_link}>
   <p>Already have an account? 
     <Link className={classes.link} onClick={loginLink}>  Login</Link> </p>
</div>


</form>
</div>

    </div>
    
    </>
  )
}

export default Login