import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {

    const [userInputs, setUserInputs] = useState([])
    const [pwdInputs, setPWDInputs] = useState([])
    const [data, setData] = useState([])
    const [disable, setDisable] = useState(true)
    const url = "http://localhost:8000/User"

    useEffect(() =>{

        axios.get(url).then(
          (Response) => { console.log(Response),
         setData(Response.data)}
         ).catch(err => console.log(err))
          
      }, []);


    const handleUserChange = (e) =>{
        setUserInputs(e.target.value)
      
    }

    const handlePWDChange = (e) =>{
        setPWDInputs(e.target.value)
      
    }


    const validateInputs = () =>{
         data && data.map(
             data =>{
                if (userInputs===setData.Username && pwdInputs===setData.Password){
                    setDisable(true)
                }else{
                    setDisable(false)
                }
             }
         )
        }

    

    const handleSubmit = (e) =>{
        e.preventDefault(),
        validateInputs()
    }

  return (
    
    <div className="grid h-full place-content-center place-items-center gap-4">
    {/* circles */}
    <div className="absolute top-10 right-0">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-blue-700"></div>
        <div className="h-20 w-20 rounded-full bg-blue-700"></div>
      </div>
    </div>
    {/* circles */}

    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-xl font-bold">
        Hi
      </label>
      <label htmlFor="" className="text-2xl font-bold">
        Sign In Now
      </label>
   
    </div>
    <form className="grid gap-2">
      <div className="h-fit w-full">
        <input
          type="username"
          className="rounded-lg py-2 px-4"
          placeholder="username"
          value={userInputs}
          onChange={handleUserChange}
        />
      </div>

      <div className="h-fit w-full">
        <input
          type="password"
          className="rounded-lg py-2 px-4"
          placeholder="password"
          value={pwdInputs}
          onChange={handlePWDChange}

        />
      </div>
      <div>
         
      </div>
      <button onClick={handleSubmit}
       className="rounded-2xl bg-red-600 py-2 px-6"
         
         >

           <i className="icon google plus"></i>
           <Link to="/dashboard">Log-in</Link>
         </button>
     
    </form>
  </div>

    
  )
}

export default Login