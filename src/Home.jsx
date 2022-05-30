import React from "react";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="grid h-fit place-items-center">
    <div className="w-full h-full flex justify-center">
      <div className="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div className="w-full mb-5">
          <h1 className="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 className="w-full text-xl text-center font-mono">Welcome to the user authentication app</h4>
        </div>
        
        <div className="w-full">
          <h3 className="text-center">Please login to continue</h3>
          <button className="my-10 rounded-full bg-blue-600 p-4 text-white"><Link to="/Login">Log-in</Link></button>
        </div>

        <div className="w-full">
          <h3 className="text-center">if this is your first time signup</h3>
          <button className="my-10 rounded-full bg-blue-600 p-4 text-white"><Link to="/signup">Sign-up</Link></button>
        </div>
      </div>
    </div>    
  </div>
  );
}

export default Home;