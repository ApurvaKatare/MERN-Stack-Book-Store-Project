import React,{useState,useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import  axios  from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const[loading,setLoading]=useState(false);
  const [cost,setCost] = useState('');
  const [description,setDescription] =useState('');
  const [imageUrl,setImageUrl] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:9999/books/${id}`)
        .then((response)=>{
          setTitle(response.data.title);
          setAuthor(response.data.author);
          setPublishYear(response.data.publishYear);
          setCost(response.data.cost);
          setDescription(response.data.description);
          setImageUrl(response.data.imageUrl);
          setLoading(false);
      })
      .catch((error) =>{
        setLoading(false);
        alert('An error happened.please check console');
        console.log(error);
       }); 

  },[])
  const handleEditBook =()=>{
  const data ={
    title,
    author,
    publishYear,
    cost,
    description,
    imageUrl,
  };
  setLoading(true);
  axios.put(`http://localhost:9999/books/${id}`,data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Book Edited successfully',{variant:'success'});
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
      <BackButton />
      <h1 className='text-3xl my-2 text-center text-black'>Update Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 bg-emerald-700 rounded-xl w-[600px] p-4 mx-auto'>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Title</label>
         <input 
         type='text'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold  text-xl mr-4 text-gray-950">Author</label>
         <input 
         type='text'
         value={author}
         onChange={(e) => setAuthor(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold  text-xl mr-4 text-gray-950">Publish Year</label>
         <input 
         type='number'
         value={publishYear}
         onChange={(e) => setPublishYear(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold  text-xl mr-4 text-gray-950">Cost</label>
         <input 
         type='number'
         value={cost}
         onChange={(e) => setCost(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold  text-xl mr-4 text-gray-950">Description</label>
         <textarea
         value={description}
         row={2}
         onChange={(e) => setDescription(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold  text-xl mr-4 text-gray-950">Image URL</label>
         <input 
         type='text'
         value={imageUrl}
         onChange={(e) => setImageUrl(e.target.value)}
         className='border-2 border-gray-500 px-4 py-2 w-full'
         />
       </div>
       <button className='p-2 bg-sky-300 m-8 font-bold bg-zinc-400 hover:bg-zinc-600  border-2 border-gray-950 ' onClick={handleEditBook}>
        Save
       </button>
      </div>
    </div>
  )
}

export default EditBook