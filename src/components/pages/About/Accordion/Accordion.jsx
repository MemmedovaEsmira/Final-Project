import React,{useState} from 'react'
import classes from "./accordion.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";



const Accordion = (props) => {
    const [active, setActive] = useState(false);

  return (
    <>
<div className={`classes.accordion ${active ? 'active' :''}`}>

<div className={classes.accordion_title} onClick={() => setActive(active)}>
  <span>{props.title}</span>
  <div className={classes.accordion_icon}>
  <TiArrowSortedDown />
  </div>
</div>


<div className={classes.accordion_content}>
  {props.content}
</div>

</div>
      
    </>
  )
}

export default Accordion;
