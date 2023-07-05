import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updatebook } from './BookSlice'
const EditBooks = () => {


    const location=useLocation()
    const [id,setId]=useState(location.state.id)
    const [title,setTitle]=useState(location.state.title)
    const [author,setAuthor]=useState(location.state.author)

    const dispatch=useDispatch()

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(updatebook({id,title,author}))
      navigate('/show-books',{replace:true})
    }
  return (
    <>

<form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >Title</label>
        <input type="text" name='title' id='title' value={title} onChange={(e) => { setTitle(e.target.value) }}/>
        <label htmlFor="">author</label>
        <input type="text"name='author' id='author'  value={author} onChange={(e) => { setAuthor(e.target.value) }}/>
        <button>updatebook</button>
    </form>
    
    
    </>
  )
}

export default EditBooks