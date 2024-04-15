

























// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// const initialState = {
//     msg:"",
//     user:"",
//     token:"",
//     loading:false,
//     error: ""

// }


// export const  signUpUser = createAsyncThunk("signupuser", async()=>{
// const res = await fetch("ddddddddd",{
//     method: "post",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(body)
// })
// return await res.json();
// })


// export const  signInUser = createAsyncThunk("signinuser", async()=>{
//     const res = await fetch("http://104.215.249.5:5000/api/login",{
//         method: "post",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//     })
//     return await res.json();
//     })

// const authSlice = createSlice({
//     name: "user",
//     initialState,

//     reducers:{

//      addToken: (state,action)=>{
//         state.token = localStorage.getItem("token")
//      },

//      addUser: (state,action)=>{
//         state.user = localStorage.getItem("user")
//      },
//      logout: (state,action)=>{
//          state.token = null;
//          localStorage.clear();    
//      }
//     },
//     extraReducers:{
// //login
//         [signInUser.pending]: (state,action)=>{
//             state.loading = true
//         },
//         [signInUser.fulfilled]: (state,{payload:{error,msg,token,user}})=>{
//          state.loading = false

//          if(error){
//             state.error = error;
//         }
//         else{
//             state.msg = msg;
//             state.token = token;
//             state.user = user;

//             localStorage.setItem('msg', msg)
//             localStorage.setItem('user', JSON.stringify(user))
//             localStorage.setItem('token', token)


//         }
         
//      },
//      [signInUser.rejected]: (state,action)=>{
//          state.loading = true;
//      },



//      //************* sign in*/

//        [signUpUser.pending]: (state,action)=>{
//            state.loading = true;
//        },
//        [signUpUser.fulfilled]: (state,{payload:{error,msg}})=>{
//         state.loading = false
//         if(error){
//             state.error = error
//         }
//         else{
//             state.msg = msg
//         }
//     },
//     [signUpUser.rejected]: (state,action)=>{
//         state.loading = true
//     }
//     }
// })


// export const{ addToken, addUser, logout} = authSlice.actions

// export default authSlice.reducer