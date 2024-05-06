import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import  axios  from 'axios'
import {useNavigate} from 'react-router-dom'
import { useSnackbar } from 'notistack'
 
const CreateBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [cost,setCost] = useState('');
  const [description,setDescription] =useState('');
  const [imageUrl,setImageUrl] = useState('');
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSaveBook =()=>{
    const data ={
      title,
      author,
      publishYear,
      cost,
      description,
      imageUrl,
    };
    setLoading(true);
    axios.post('http://localhost:9999/books',data)
          .then(()=>{
              setLoading(false);
              enqueueSnackbar('Book created successfully',{variant:'success'});
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
      <BackButton className='bg-emerald-700'/>
      <h1 className='text-3xl my-4 text-center'>Add Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2  rounded-xl w-[600px] p-4 mx-auto bg-emerald-700'>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Title</label>
         <input 
         type='text'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         className='border-2  px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Author</label>
         <input 
         type='text'
         value={author}
         onChange={(e) => setAuthor(e.target.value)}
         className=' border-2  px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Publish Year</label>
         <input 
         type='number'
         value={publishYear}
         onChange={(e) => setPublishYear(e.target.value)}
         className=' border-2  px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Cost</label>
         <input 
         type='number'
         value={cost}
         onChange={(e) => setCost(e.target.value)}
         className='border-2  px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold text-xl  text-gray-950">Description</label>
         <textarea 
         value={description}
         row={2}
         onChange={(e) => setDescription(e.target.value)}
         className='border-2  px-4 py-2 w-full'
         />
       </div>
       <div className='my-2'>
        <label className="font-bold text-xl mr-4 text-gray-950">Image URL</label>
         <input 
         type='text'
         value={imageUrl}
         onChange={(e) => setImageUrl(e.target.value)}
         className=' border-2  px-4 py-2 w-full'
         />
       </div>
       <button className='p-2 bg-sky-300 m-8 bg-zinc-400 hover:bg-zinc-600 font-bold border-2 border-gray-950' onClick={handleSaveBook}>
        Save
       </button>
      </div>
    </div>
  )
}

export default CreateBook