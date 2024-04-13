import React,{useState} from 'react'
import classes from "../Login/login.module.scss"
import { logout, signInUser } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = ()=>{
        console.log(email, password)
        dispatch(signInUser({email, password}));
    }

    const logouthandle = ()=>{
      dispatch(logout())
    }

  return (
    <div>
    <div className={classes.container}>
    <h3>Login</h3>
    
    <label htmlFor="">Email</label>
    <input className={classes.container_input}  type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label htmlFor="">Password</label>
    <input className={classes.container_input}  type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleLogin} className={classes.container_btn} >Login</button>
    <button onClick={logouthandle} className={classes.container_btn} >Logout</button>

  </div>

  </div>
  )
}

export default Login
