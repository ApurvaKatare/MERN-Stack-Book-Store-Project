import React,{useState} from 'react'
import  axios  from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import {useNavigate,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook =()=>{
    setLoading(true);
    axios.delete(`http://localhost:9999/books/${id}`)
          .then(()=>{
              setLoading(false);
              enqueueSnackbar('Book Deleted successfully',{variant:'success'});
              navigate('/');
          })
          .catch((error) =>{
           setLoading(false);
           //alert('An error happened.please check console');
           enqueueSnackbar('Error',{variant:'error'});
           console.log(error);
          }); 
        };
  return (
    <div className='p-4'>
    <BackButton/>
    <h1 className='text-3xl my-4 text-center '>Delete Book</h1>
    {loading ? <Spinner/> : ''}
    <div className='flex flex-col items-center border-2  rounded-xl w-[600px] p-8 mx-auto bg-emerald-700'>
    <h3 className='text-2xl '>Are you sure you want to delete this book?</h3>

   <button className='p-4  bg-lime-100 hover:bg-lime-200 text-black font-bold m-8 w-full text-center'
   onClick={handleDeleteBook}
   > Yes,Delete it
   </button>

    </div>
    </div>
  )
}

export default DeleteBook