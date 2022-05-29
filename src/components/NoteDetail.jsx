import React,  {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


function NoteDetail() {

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
      <div key={note.id}>{note.description} <br/> </div>
      )
    }
  )

  return (
    <div className="">
    <div className="w-full flex justify-center">
      <div className="mt-10 px-5 pb-5 w-3/5 border-2 border-gray-300 rounded">
          <div className="py-3 px-5 mt-5 mb-3 bg-gradient-to-r from-lime-50 to-green-50 flex justify-between">
            <h2 className="text-xl text-center font-semibold text-gray-900 opacity-50">{}</h2>
                <span className="text-2xl font-extrabold"></span>
                <button className='bg-white-600 pl-20'> <Link to="/"> Back</Link></button>
       
          </div>
            <div className="p-3 bg-stone-100 mb-1">
              <div>
                <p className="text-gray-700 font-sans">{arr}</p>
              </div>
            </div>
      </div>
    </div>
  </div>
  )
}

export default NoteDetail