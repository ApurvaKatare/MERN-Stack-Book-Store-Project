import React from 'react'
import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle,BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle} from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { useState } from 'react'
import BookModal from './BookModal'
import {FaRupeeSign} from 'react-icons/fa'


const BookSingleCard = ({book}) => {
    const [showModal,setShowModal] = useState(false);
  return (
    <div 
     key={book._id}
     className='border-2  bg-emerald-700 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
     <div className='mb-8'>
     <h2 className='absolute top-1 left-1 px-4 py-1 bg-rose-700 rounded-lg mb-6'>
     {book.publishYear}
     </h2>
     </div>
     {/* <h4 className='my-2 text-gray-500'>{book._id}</h4> */}
     <div className='flex justify-start items-center gap-x-2'>
      <PiBookOpenTextLight className='text-rose-400 text-2xl '/>
      <h2 className='my-1'>{book.title}</h2>
     </div>

     <div className='flex justify-start items-center gap-x-2'>
      <BiUserCircle className='text-rose-400 text-2xl '/>
      <h2 className='my-1'>{book.author}</h2>
     </div>
     <div className='flex justify-start items-center gap-x-2'>
      <FaRupeeSign className='text-rose-400 text-2xl'/>
      <h2 className='my-1'>{book.cost}</h2>
     </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
        className='text-3xl text-blue-800 hover:text-black cursor pointer'
        onClick={() => setShowModal(true)}
        />
      <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className='text-2xl text-gray-200 hover:text-black'/> 
      </Link>
      <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/> 
      </Link>
      <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/> 
      </Link>

   
      </div>
      {
        showModal &&
        (
            <BookModal book={book} onClose={() => setShowModal(false)}/>
        )
      }
     </div>
  );
};

export default BookSingleCard