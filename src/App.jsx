import React, {  useState } from "react";
import "./App.css"
import Weather from "./Weather"



function App() {



  return (
    <div className='flex justify-center bg-gray-500 h-screen'>
          <div className='h-96 w-1/2 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-200 border border-gray-200'>
        <Weather />
    </div>
    </div>
  )
}

export default App


