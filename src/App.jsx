// @flow strict

import React, { useState } from 'react';





function App()  {
  const [firstname, setFirstname] = useState('');

 const  handleChange = (e) => {
   setFirstname (e.target.value);

   if(setFirstname < 3){
     alert("below three characters add more characters to name ")
   }else{
     return;
   }
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
      <form className="grid gap-2">
      <div className="h-fit w-full">
          <input
            type="Firstname"
            className="rounded-lg py-2 px-4"
            placeholder="Firstname"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div className="h-fit w-full">
          <input
            type="Lastname"
            className="rounded-lg py-2 px-4"
            placeholder="Lastname"
            
          />
        </div>
        <div className="h-fit w-full">
          <input
            type="email"
            className="rounded-lg py-2 px-4"
            placeholder="email"
          />
        </div>

        <div className="h-fit w-full">
          <input
            type="password"
            className="rounded-lg py-2 px-4"
            placeholder="password"
          />
        </div>



        <div className="flex items-center justify-center gap-2">

          <button className="rounded-2xl bg-red-600 py-2 px-6"
          onClick={(e) => this.validation(e)}
          >
            <i className="icon google plus"></i>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
        
      </div>
    );
  }


export default App;