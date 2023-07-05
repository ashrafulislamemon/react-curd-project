import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deletebook } from './BookSlice'
const BooksViews = () => {

const book = useSelector((state) => state.BookReducer.books)
console.log(book)
const dispatch = useDispatch()
const handledelete=(id)=>{
  dispatch(deletebook(id))
}

  return (
    <>

    <table>
     
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
            
        </tr>  
    
       

            {book &&  book.map(book =>{
                const {id,title,author}=book
                return(
                    <>
                    <tr>
                        
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td><Link to='/edit-book' state={{id,author,title}}><button>Edit</button></Link>
                            <button onClick={()=>{handledelete(id)}}>Delete</button>
                            </td>
                            </tr>
                    </>
                )
            })}
            
   
      
    </table>
    
    </>
  )
}

export default BooksViews