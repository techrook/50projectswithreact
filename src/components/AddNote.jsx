import axios from 'axios'
import React,{ useState} from 'react'
import { Link } from "react-router-dom";

function AddNote() {
    const [Title, setTitle] = useState('')
    const [Description, setDescription ] = useState('')
    const [errMssg, setErrMssg] = useState('')

   
  
    const validateTitle = () =>{
        if (Title.length === 0){
            setErrMssg("you must enter this field ")
        }else{
            setErrMssg('')
        }
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleDESChange = (e) =>{
        setDescription(e.target.value)
    }


    const handleSubmit = (e) =>{
       

        e.preventDefault();
        axios.post("http://localhost:8000/notes" , {
            title : Title,
            description : Description
        }
        ).then(Response => console.log(Response)).catch(err => console.log(err))

    }

  return (

        <div className="w-full flex justify-center mt-12">
            <div className="bg-teal-50 w-3/5 border rounded flex justify-center px-12">
                <div className="my-5 w-full ">
                    <div className="py-2 px-8 bg-gradient-to-r from-red-500 via-red-300 to-red-600 border rounded text-gray-700 flex justify-between" v-if="errMssg.length > 1">
                        <h3>{errMssg}</h3>
                        <h6 className="text-white cursor-pointer font-bold text-lg"></h6>
                    </div>
                    <div className="py-2 px-8 bg-gradient-to-r from-green-500 via-teal-300 to-green-600 border rounded text-gray-700 flex justify-between" v-else-if="succMssg.length > 1">
                    <button className='bg-white-600 pl-20'> <Link to="/"> Back</Link></button>
                        <h6 className="text-white cursor-pointer font-bold text-lg"></h6>
                    </div>
                    <form 
                    onSubmit={validateTitle}
                    className="mt-5">
                        <input
                        
                        onChange={handleTitleChange}
                        value={Title}
                         className="h-11 w-full font-semibold font-serif border rounded p-4 focus:outline-green-100"  placeholder="Enter note title"></input>
                        
                        <textarea 
                        
                        onChange={handleDESChange}
                        value={Description}
                        className="mt-4 h-40 w-full font-serif border rounded p-4 focus:outline-green-100" 
                         placeholder="Enter note description"></textarea>
                        
                       <button 
                       
                       onClick={handleSubmit }
                       className="mt-4 bg-gradient-to-r from-teal-400 via-green-300 to-teal-500 hover:bg-gradient-to-r hover:from-teal-300 hover:via-green-400 hover:to-teal-400 px-5 py-2 rounded">
                           <p className="text-sm font-semibold">Add</p>
                       </button>
                    </form>
                </div>
            </div>
        </div>



  )
}

export default AddNote