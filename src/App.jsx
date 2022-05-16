// @flow strict

import React, { useState } from 'react';
import {validEmail} from './Regex';



 function App() {

  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [email, setEmail] = useState('')
  const [nameerrmsg, setNamerrmsg] = useState('')
  const [nameerrmsg1, setNamerrmsgl] = useState('')
  const successmsg = 'good'
  const successmsg1 = 'good'
  const [emailErr, setEmailErr] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setFirmPassword] = useState('')

  
    
  const handleFirstChange = (e) =>{
      setFirstname(e.target.value)
    
  }
  const handleLastChange = (e) =>{
    setLastname(e.target.value)
  
}

const handleEmailChange = (e) =>{
  setEmail(e.target.value)
}

const handlePWDChange = (e) =>{
  setPassword(e.target.value)
}

const handleFirmPWDChange = (e) =>{
  setFirmPassword(e.target.value)
}




  const validateFirstname = () =>{
    setNamerrmsg('')
    if(firstname.length < 4){
      setNamerrmsg ('First name must be greater than 3 characters')
    }else{
      setNamerrmsg ('')
    }

    
  }

  const validateLastname = () =>{
    if(lastname.length < 4){
      setNamerrmsgl ("First name must be greater than 3 characters")
    }else{
      
    }

    
  }

  const validatePWD = () =>{
    if(password === confirmPassword){
      console.log('ok')
    }else{
      console.log('shit')
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    return <p>{lastname}</p>
  }

  



 
    return (
      

      <div>
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
      <form 
        
      className="grid gap-2">
      <div className="h-fit w-full">
          <input 
            name='firstname'
            type="firstname"
            className="rounded-lg py-2 px-4"
            placeholder="Firstname"
            value={firstname}
            onChange={handleFirstChange}
            onKeyUp={validateFirstname}
          />
            <div>
          {nameerrmsg}
        </div>
         
        </div>
        <div className="h-fit w-full">
          <input
          name='lastname'
            type="lastname"
            className="rounded-lg py-2 px-4"
            placeholder="Lastname"
            value={lastname}
            onChange={handleLastChange}
            onKeyUp={validateLastname}
            
            
            
          />
           <div>
            
        </div>
        </div>
        <div className="h-fit w-full">
          <input
            type="email"
            className="rounded-lg py-2 px-4"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
          <div>
            {emailErr && <p>Your email is invalid</p>}
          </div>
        </div>

        <div className="h-fit w-full">
          <input
            type="password"
            className="rounded-lg py-2 px-4"
            placeholder="password"
            value={password}
            onChange={handlePWDChange}
          
          />
        </div>

        <div className="h-fit w-full">
          <input
            type="password"
            className="rounded-lg py-2 px-4"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleFirmPWDChange}
            onKeyUp={validatePWD}
          />
          <div>
            {password === confirmPassword ? (
              <p className='text-green-600'>match</p>
            ): (
              <p className='text-red-600'>dont match</p>
            )}

          </div>
        </div>



        <div className="flex items-center justify-center gap-2">

          <button className="rounded-2xl bg-red-600 py-2 px-6"
          onClick={handleSubmit }
          >

            <i className="icon google plus"></i>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
    <div>
            {handleSubmit && <p>{firstname} <br></br>
            {lastname}<br></br> {email}</p>}
    </div>

      </div>


    );
  }
  


export default App;