import {createSlice} from "@reduxjs/toolkit"

// const initialCartState = localStorage.getItem("cart")
// if(!localStorage.getItem("cart")){
//     localStorage.setItem("cart",[])
//  }
export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    
    reducers:{
     add:(state,action)=>{
         state.push(action.payload)
        //  localStorage.setItem("cart", JSON.stringify(state));
        //  if(!localStorage.getItem("cart")){
        //     localStorage.setItem("cart","[]")
        //  }
         console.log("aayyaa")
        },
     
     remove:(state,action)=>{
       return state.filter((item)=>item.id !== action.payload)

       
     }
     

    }
})
export const{add,remove}= cartSlice.actions;
export default cartSlice.reducer;



