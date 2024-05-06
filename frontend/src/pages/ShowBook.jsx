import React, {useEffect,useState} from 'react'
import  axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const ShowBook = () => {
  const [book,setBook]=useState({});
  const[loading,setLoading]=useState(false);
  const { id }  = useParams();
  useEffect(()=> {
    setLoading(true);
    axios.get(`http://localhost:9999/books/${id}`)
    .then((response)=>{
        console.log(response.data);
        setBook(response.data);
        setLoading(false);
    })
    .catch((error) =>{
     console.log(error);
     setLoading(false);
    }); 
},[])
const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const dayAndDate = dateObject.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return `${dayAndDate}`;
};

const formatDate2 = (dateString) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

  const dateObject = new Date(dateString);
  const time = dateObject.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' });
  const dayAndDate = dateObject.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });

  return `${time}, ${dayAndDate}`;
};
  return (
    <div className='p-4'>
    <BackButton/>
    {/* <h1 className='text-3xl my-4 text-center '>Book Details</h1> */}
    { loading ? (
      <Spinner/>
    ) :(
     <div className='flex justify-between my-4'>
      <div className='w-1/3 h-full ml-8  flex justify-center rounded-xl'><img className='w-3/4 h-2/3' src={book.imageUrl} alt="" /></div>
    <div className=' border-2  rounded-xl w-fit p-4 bg-emerald-700 w-2/3 h-full '>
    {/* <div className='my-2'>
   <span className='text-xl mr-4 text-neutral-300'>ID :</span>
    <span className='text-gray-50'>{book._id}</span>
   </div> */}
    <div className='my-2'>
   {/* <span className='text-xl mr-4 text-gray-500 text-neutral-300'>Title :</span> */}
    <h1 className='text-gray-50 text-center font-bold text-xl'>{book.title}</h1>
    </div>
    <div className='my-2'>
   <span className='text-xl mr-4 text-neutral-300'>Author :</span>
    <span className='text-gray-50'>{book.author}</span>
    </div>
    <div className='my-2'>
   {/* <span className='text-xl mr-4 text-neutral-300'>Description :</span> */}
    <i className='text-gray-50'>{book.description}</i>
    </div>
    <div className='my-2'>
   <span className='text-xl mr-4 text-neutral-300'>Publish Year :</span>
    <span className='text-gray-50'>{book.publishYear}</span>
    </div>
    <div className='my-2'>
   <span className='text-xl mr-4 text-neutral-300'>Cost :</span>
    <span className='text-gray-50'>{book.cost} &#8377;</span>
    </div>
    
    <div className='my-8'></div>
    <div className='my-1'>
   <span className='text-xl mr-4 text-neutral-300'>Create Time :</span>
    <span className='text-gray-50'>{formatDate2(book.createdAt)}</span>
    </div>
    <div className='my-1'>
   <span className='text-xl mr-4 text-neutral-300'>Last update Time :</span>
    <span className='text-gray-50'>{formatDate2(book.createdAt)}</span>
    </div>
    </div>
    </div>
    )}
    </div>
  )
}

export default ShowBook