
import { createSlice } from '@reduxjs/toolkit'
const initialData={
    books:[
        {id:1,title:'bengladesh beautifull',author:'ashraf'},
        {id:2,title:'india beautifull',author:'ovi'}
    ]
}

export const BookSlice = createSlice({
    name: 'Books',
    initialState:initialData,
    reducers: {
      Showbook: (state) => state.books,
      addbook:(state,action)=>{state.books.push(action.payload)},

      
      deletebook:(state,action)=>{
        const id=action.payload
        state.books=state.books.filter(books => books.id!==id)},
      updatebook:(state,action)=>{
            const {id,title,author}=action.payload
            const isexitsbook=state.books.filter((book)=>book.id===id)
            if (isexitsbook){
                isexitsbook[0].title=title
                isexitsbook[0].author=author
                
            }
     },

  }})
  
  // Action creators are generated for each case reducer function
  export const { Showbook,addbook,deletebook,updatebook} = BookSlice.actions
  
  export default BookSlice.reducer