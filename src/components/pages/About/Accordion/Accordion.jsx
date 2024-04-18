import React,{useState} from 'react'
import classes from "./accordion.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";



const Accordion = (props) => {
    const [showInfo, setshowInfo] = useState(false);

  return (
    <>
<div className={classes.accordion}>

<div className={classes.accordion_title} onClick={() => setshowInfo(!showInfo)}>
  <span>{props.title}</span>
  {showInfo ?  <TiArrowSortedDown /> :  <TiArrowSortedUp />}
</div>

{showInfo &&
<div className={classes.accordion_content}>
  {props.content}
</div>
}

</div>
      
    </>
  )
}

export default Accordion;
