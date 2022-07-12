import React, {  useState } from "react";
import "./App.css"
import Weather from "./Weather"



function App() {



  return (
    <div className='contenair bg-cover min-h-screen w-full flex justify-center items-center'>
          <div className='h-96 w-1/2 text-center  w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
        <Weather />
    </div>
    </div>
  )
}

export default App


