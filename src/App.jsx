import React, {  useState } from "react";
import "./App.css"
import IpAddress from "./Components/IpAddress";
import Card from "./ui/Card";
import img from "./public/image/pattern-bg.png"



function App() {
  return (
    <Card className="flex justify-center w-full bg-gradient-to-r from-pink-500 to-violet-500">
       <img className="w-full h-1/2" src={img} alt="" /> 
        {/* <LocationMap lat={IpAddressDist.lat} lon={IpAddressDist.lon}/> */}
      <h1 className="capitalize font-bold text-lg md:text-xl text-gray-500 text-center">your ip address is :</h1>
      <IpAddress/>
    </Card>
  )
}

export default App


