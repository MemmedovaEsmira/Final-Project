import { useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeItem, updatePrice } from "../../redux/slice/CartSlice"
import data from "../../data"

import classes from "./CartItem.module.scss"

export default function CartItem({data}) {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(data?.quantity)
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: data?.id}))
    }


    useEffect(() => {
        setTotalPrice(data?.price * quantity)
        dispatch(updatePrice({id: data?.id, quantity}))
    }, [quantity, data?.price, data?.id, dispatch])

    return(
        <tr>
           <td>
                <span>
                    <img src={data.img} alt="" /> 
                    <p>{data.name}</p>
                </span>
            </td> 
            <td className={classes.price}>
                {data.price}$
            </td>
            <td>
                <span >
                    <button className={classes.changeBtn} onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                    <input type="number" value={quantity} className={classes.input} onChange={handleChange} />
                    <button className={classes.changeBtn} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                </span>
            </td>
            <td className={classes.price}>
                {totalPrice}$
            </td>
            <td>
                <button className={classes.btnt} onClick={handleRemove}><FaTrashAlt /></button>
            </td>
        </tr>
    )
}