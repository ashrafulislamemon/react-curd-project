import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>

    <Link to='/'>Home</Link>
    <Link to='/show-books'>Show Book</Link>
    <Link to='/add-books'>Add Book</Link>
  
    
    </>
  )
}

export default Navbar