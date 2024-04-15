
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { list: [], total: 0 },
    reducers: {
        addToCart(state, action) {
            const check = state.list.findIndex(flower => flower.id === action.payload.id)
            if (check !== -1) {
                state.list[check].quantity += action.payload.quantity 
            } else {
                state.list.push(action.payload)
            }

            state.total = state.list.reduce((sum, flower) => sum + +flower?.price * flower?.quantity, 0)
        },
        updatePrice(state, action) {
            const check = state.list.findIndex(flower => flower.id === action.payload.id)
            if (check !== -1) {
                state.list[check].quantity = action.payload.quantity 
            }
            state.total = state.list.reduce((sum, flower) => sum + +flower?.price * flower?.quantity, 0)
        },
        removeItem(state, action) {
            state.list = state.list.filter(flower => flower.id !== action.payload.id)
            state.total = state.list.reduce((sum, flower) => sum + +flower?.price * flower?.quantity, 0)
        }
    }
})

const { actions, reducer } = cartSlice

export const { addToCart, updatePrice, removeItem } = actions

export default reducer










// import {createSlice} from "@reduxjs/toolkit";



// export const cartSlice = createSlice({
//     name:'cart',
//     initialState:{
//         cart:[],
//     },
//     reducers:{
//         addToCart:(state,action) =>{
//             const itemPresent = state.cart.find((item) =>item.id === action.payload.id);
//             if(itemPresent){
//                 itemPresent.quantity++;
//             }else{
//                 state.cart.push({...action.payload,quantity:1})
//             }
//         },
//         removeFromCart:(state,action) =>{
//             const removeItem = state.cart.filter((item) =>item.id !== action.payload.id);
//             state.cart = removeItem;
//         }
//     }
// });

// export const {addToCart,removeFromCart} = cartSlice.actions

// export default cartSlice.reducer;