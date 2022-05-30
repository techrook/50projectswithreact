import React, { useEffect, useState} from 'react'
import axios from 'axios';

function Dashbord() {

    const [data, setData] = useState([])
    const url = "http://localhost:8000/User"
    useEffect(() =>{

        axios.get(url).then(
          (Response) => { console.log(Response),
         setData(Response.data)}
         ).catch(err => console.log(err))
          
      }, []);

  return (
    <div className="">
    <div className="w-full flex justify-center">
      <div className="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div className="w-full mb-5">
          <h1 className="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 className="w-full text-xl text-center font-mono">Welcome {data.LastName}{data.FirstName} to your dashboard</h4>
        </div>
        
        <div className="w-full">
          <h3 className="text-center">You're in control of this dashboard until you login</h3>
        </div>
      </div>
    </div>    
  </div>
  )
}

export default Dashbord