import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


function Home() {

  const [notes, setNote] = useState([])
  const url = "http://localhost:8000/notes"

    useEffect(() =>{

      axios.get(url).then(
        (Response) => { console.log(Response),
       setNote(Response.data)}
       ).catch(err => console.log(err))
        
    }, []);



    const arr = notes && notes.map(
      note =>{
        return(
        <div key={note.id}>{note.title} <br/> </div>
        )
      }
    )
    


     
   
   
         

  return (
    <div className="">
    <div className="w-full flex justify-center">
      <div className="mt-10 px-5 pb-5 w-3/5 border-2 border-gray-300 rounded">
      <p>
          Would you love to add a note ?<button className='bg-gray-600'> <Link to="/AddNote">Add Note</Link></button>
        </p>
        <p className="py-3 px-5 mt-5 bg-gradient-to-r from-orange-200 to-amber-300 text-sm font-semibold">
          </p>


        <div>
          <p className="py-3 px-5 mt-5 mb-3 bg-gradient-to-r from-lime-200 to-green-300 text-sm flex flex-row  font-semibold text-gray-600">{
            
            arr}<button className='bg-white-600 pl-20'> <Link to="/notedetail"> See Desription</Link></button>
                         
          </p>
          <div>
                <h1 className="font-semibold text-gray-700 font-sans">
                 
                
                </h1>
               
              </div>
        </div>
      </div>
    </div>    
  </div>
  )
}

export default Home