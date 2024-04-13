

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice"

const store = configureStore({
    reducer:{
     user: authSlice,
    }
})

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./CartSlice";

// export default configureStore({
//     reducer:{
//         cart:cartReducer
//     }
// })

