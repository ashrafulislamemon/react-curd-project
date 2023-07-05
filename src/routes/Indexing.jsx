import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../Layout/Navbar'
import AddBooks from '../Features/Books/AddBooks'
import BooksViews from '../Features/Books/BooksViews'
import EditBooks from '../Features/Books/EditBooks'
const Indexing = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/add-books" element={<AddBooks/>}/>
        <Route path="/show-books" element={<BooksViews/>}/>
        <Route path="/edit-book" element={<EditBooks/>}/>
      
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default Indexing