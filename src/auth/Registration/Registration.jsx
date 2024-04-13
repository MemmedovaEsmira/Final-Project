import React, { useState } from 'react'
import classes from "./registration.module.scss"
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/authSlice';




const Registration = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const dispatch = useDispatch()


const  registrationHandle =()=>{
  console.table(name, email, password)
  dispatch (signUpUser({name, email, password}))
}

  return (
    <div>
      <div className={classes.container}>
      <h3>Registration</h3>
      <label htmlFor="">Name</label>
      <input className={classes.container_input} type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="">Email</label>
      <input className={classes.container_input}  type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <label htmlFor="">Password</label>
      <input className={classes.container_input}  type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={registrationHandle} className={classes.container_btn} >Registration</button>
    </div>

    </div>

  )
}

export default Registration
