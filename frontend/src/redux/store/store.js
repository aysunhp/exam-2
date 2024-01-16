import { configureStore } from '@reduxjs/toolkit'
import mealReducer from "./../slice/mealSlice"
export const store = configureStore({
  reducer: {
      meal:mealReducer
  },
})