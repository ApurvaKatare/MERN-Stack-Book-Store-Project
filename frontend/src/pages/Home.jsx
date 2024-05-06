import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md';
import BooksTable from '../components/Home/BooksTable';
import BooksCard from '../components/Home/BooksCard';


const Home = () => {
    const [books,setBooks]=useState([]);
    const[loading,setLoading]=useState(false);
    const[ShowType,setShowType] = useState('table');
    useEffect(()=> {
        setLoading(true);
        axios.get('http://localhost:9999/books')
        .then((response)=>{
            // console.log(response.data);
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) =>{
         console.log(error);
         setLoading(false);
        }); 
    },[])

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4 text-black'>
      <button
       className='  font-bold bg-emerald-700 hover:bg-emerald-400 px-9 py-3 rounded-lg '
       onClick={() => setShowType('table')}
      >
        Table
      </button>
      
      <button
       className=' font-bold  bg-emerald-700 hover:bg-emerald-400  px-9 py-3 rounded-lg '
       onClick={() => setShowType('card')}
      >
        Card
      </button>

      </div>
    {/* <div className=' text-xl  items-center flex justify-between'>
      Book List
       */}
     <Link to='/books/create' className='text-right flex item-center my-6'>
     <div className='ml-auto'>
       <h1 className='text-lg font-bold'>
                    Add New Book
       </h1>
     </div>
     
     <div className='ml-2'>
     <MdOutlineAddBox className='text-800 text-3xl'/>
     </div>
     </Link>
     {/* </div>
     */}
    {loading ? <Spinner/>: ShowType == 'table' ? (<BooksTable books={books}/>) : (<BooksCard books={books}/>)  


    }
    </div>
  )
}

export default Home