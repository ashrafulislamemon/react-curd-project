// import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addbook } from './BookSlice'
import {useNavigate} from 'react-router-dom'
import React from 'react'

const AddBooks = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const numofbook=useSelector((state)=>state.BookReducer.books.length)
    console.log(numofbook)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const book={id:numofbook+1,title,author}
        
        dispatch(addbook(book))
        navigate('/show-books',{replace:true})

      
    }
    

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >Title</label>
        <input type="text" name='title' id='title' value={title} onChange={(e) => { setTitle(e.target.value) }}/>
        <label htmlFor="">author</label>
        <input type="text"name='author' id='author'  value={author} onChange={(e) => { setAuthor(e.target.value) }}/>
        <button>addbook</button>
    </form>
    
    
    </>
  )
}

export default AddBooks