import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';

const BooksTable = ({books}) => {
  return (
    <table className='w-full border-seperate border-spacing-4  '>
         <thead>
          <tr>
             <th className='border border-slate-600 bg-emerald-700'>No</th>
             <th className='border border-slate-600 rounded-md bg-emerald-700' >Title</th>
             <th className='border border-slate-600 rounded-md max-md:hidden bg-emerald-700 '>
                Author</th>
            <th className='border border-slate-600 rounded-md max-md:hidden bg-emerald-700 '>
                Publish Year</th>
                <th className='border border-slate-600 rounded-md max-md:hidden bg-emerald-700 '>
                cost</th>
            <th className='border border-slate-600 rounded-md bg-emerald-700 '>Operations</th>
          </tr>
         </thead>
         <tbody>
         {books.map((book,index) => (
         <tr key={book.id} className='h-8'>
         <td className='border border-slate-700 rounded-md text-center bg-zinc-300'>
            {index+1}
         </td>
         <td className='border border-slate-700 rounded-md text-center bg-zinc-300'>
            {book.title}
         </td>
         <td className='border border-slate-700 rounded-md text-center max-md:hidden bg-zinc-300'>
            {book.author}
         </td>
         <td className='border border-slate-700 rounded-md text-center max-md:hidden bg-zinc-300'>
            {book.publishYear}
         </td>
         <td className='border border-slate-700 rounded-md text-center max-md:hidden bg-zinc-300'>
            {book.cost} &#8377;
         </td>
         <td className='border border-slate-700 rounded-md text-center bg-stone-300'>
         <div className='flex justify-center gap-x-4'>
          <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
          </Link>
          <Link to={`/books/edit/${book._id}`}>
           <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
          </Link>
         </div>
         </td>
         </tr>
         ))
         }

         </tbody>
        </table>

  )
}

export default BooksTable