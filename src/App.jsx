import React, { useState } from 'react'

function App() {

  const [color, setColor] = useState('')

  const colorValue = (e) =>{
    setColor(e.target.value)
  }

  const myStyle = () => {
    console.log(color)
  }
  return (

    <div className="">
    <div className="w-full flex justify-center">
      <div className="w-2/5">
        <h1 className="mt-12 text-center font-semibold text-gray-600">Enter a hex color code to see its preview</h1>
        <div className="mt-6 mb-3 py-8 px-12 pb-5 w-full h-44 border-2 border-gray-300 rounded"
        style={{backgroundColor : color}}
         >
        </div>
        <input type="text" 
        placeholder="Enter color hex code here" 
        className="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100"
         maxLength="7" 
         value={color}
         onChange={colorValue}
         onKeyUp={myStyle}
         />
     
      </div>
    </div>    
  </div>
  )
}

export default App
