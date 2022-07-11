import React, {  useState } from "react";
import "./App.css"
import Weather from "./Weather"
import Form from "./Forms";


function App() {

  const [weather,setWeather] = useState([])
  const APIKEY = '79cea5cf9a26e24d726c160cfd8b6f82'

  async function fetchData(e) { 

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
  const apiData = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=kano,nigeria&appid={API key}`)
    .then( res => res.json())
    .then(data => data)
    setWeather({
      data: apiData,
      city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        error:""
    }
    )
  }


  return (
    <div className='flex justify-center bg-gray-500 h-screen'>
          <div className='h-96 w-1/2 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-200 border border-gray-200'>
        
          <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
    </div>
  )
}

export default App


