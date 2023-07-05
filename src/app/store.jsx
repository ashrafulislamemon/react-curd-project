import { configureStore } from '@reduxjs/toolkit'
import BookReducer from '../Features/Books/BookSlice'
export const store = configureStore({
  reducer: {

    BookReducer:BookReducer
  },
})


