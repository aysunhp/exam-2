import { createSlice, current } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  basket:[],
  wishlist:[]
}

 export const fetchData = createAsyncThunk(
    "user/fetchData",
    async () => {
  
      const response = await axios.get(`http://localhost:8000/api`).then((res)=>{
          return res.data
      });
      return response;
    }
  );
  


export const mealSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    addBasket: (state, action) => {
        let foundIndex=state.basket.findIndex(item=>item._id==action.payload._id)
       if( foundIndex!== -1){
        state.basket = current(state.basket).map((item,index)=>{
    if (index==foundIndex){
        return {
            ...item, quantity: item.quantity+1
        }
    }else{
      return   item
    }


        })
       }else{
        state.basket = [...current(state.basket),{...action.payload, quantity:1}]
       }
       console.log(state.basket)
    },
    increaseBasket: (state, action) => {
        let foundIndex=state.basket.findIndex(item=>item._id==action.payload._id)
      
        state.basket = current(state.basket).map((item,index)=>index==foundIndex?{
            ...item, quantity: item.quantity+1
        }:item)
       
       console.log(state.basket)
    },
    decreaseBasket: (state, action) => {
        let foundIndex=state.basket.findIndex(item=>item._id==action.payload._id)
      
        state.basket = current(state.basket).map((item,index)=>index==foundIndex?{
            ...item, quantity: item.quantity-1
        }:item)
       
       console.log(state.basket)
    },

    deleteBasket: (state, action) => {

        state.basket = current(state.basket).filter(item=>item._id!=action.payload._id)

       console.log(state.wishlist)
    },
    addWishlist: (state, action) => {
        let foundIndex=state.wishlist.find(item=>item._id==action.payload._id)
       if( foundIndex){
        state.wishlist = current(state.wishlist).filter(item=>item._id!=action.payload._id)
       }else{
        state.wishlist = [...current(state.wishlist),action.payload]
       }

       console.log(state.wishlist)
    },
    deleteWishlist: (state, action) => {

        state.wishlist = current(state.wishlist).filter(item=>item._id!=action.payload._id)

       console.log(state.wishlist)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
     
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.data = action.payload;

      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },

})


export const { addWishlist, addBasket, increaseBasket, decreaseBasket, deleteBasket, deleteWishlist } = mealSlice.actions

export default mealSlice.reducer